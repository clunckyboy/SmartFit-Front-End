import { useState, useMemo, useEffect } from "react";
import OverviewSidebar from "../components/OverviewSidebar";
import DailyActivities from "../components/DailyActivities";
import CaloriesLog from "../components/CaloriesLog";
import ProfilePopup from "../components/ProfilePopUp";
import { dailyActivities, foodData } from "../utils/dummyData";
import { getDailyItems } from "../utils/seed";
import { loadProgress, saveActivityProgress, saveFoodProgress } from '../utils/progress-storage';

export default function DashboardPage({ onLogout, user }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [completedActivityIds, setCompletedActivityIds] = useState(new Set());
  const [consumedFoodIds, setConsumedFoodIds] = useState(new Set());
  const [streak, setStreak] = useState(0);

  const userGoal = user.goal ?? 'maintain-weight';

  const activities = useMemo(() =>
    getDailyItems(dailyActivities[userGoal], 3, user.id)
  , [userGoal, user.id]);

  const foods = useMemo(() =>
    getDailyItems(foodData[userGoal], 6, user.id)
  , [userGoal, user.id]);

  const dailyCalorieTarget = useMemo(() =>
    foods.reduce((total, food) => total + food.kcal, 0)
  , [foods]);

  const completedActivities = completedActivityIds.size;
  const consumedCalories = foods
    .filter(f => consumedFoodIds.has(f.id))
    .reduce((total, f) => total + f.kcal, 0);

  async function handleActivityDone(activityId) {
    setCompletedActivityIds(prev => new Set([...prev, activityId]));
    const newStreak = await saveActivityProgress(activityId, true);
    if (newStreak !== null) setStreak(newStreak);
  }

  async function handleFoodConsume(foodId) {
    setConsumedFoodIds(prev => new Set([...prev, foodId]));
    const newStreak = await saveFoodProgress(foodId, true);
    if (newStreak !== null) setStreak(newStreak);
  }

  useEffect(() => {
    loadProgress().then(({ completedActivityIds, consumedFoodIds, streak }) => {
      setCompletedActivityIds(new Set(completedActivityIds));
      setConsumedFoodIds(new Set(consumedFoodIds));
      setStreak(streak);
    });
  }, [user.id]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen">

      {/* fixed background layers */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/images/landing-page-background.png')", backgroundColor: "#166534" }}
      />
      <div className="fixed inset-0 bg-green-900/50 pointer-events-none" />

      {/* scroll container */}
      <div className="relative z-10 min-h-screen flex flex-col p-4 gap-4">

        <header className={`sticky top-0 z-20 flex items-center justify-between py-2 -mx-4 px-4 transition-colors duration-300 ${scrolled ? 'bg-green-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
          <h1 className="text-white text-3xl tracking-wide font-special-gothic-expanded-one select-none">
            SmartFit
          </h1>
          <nav aria-label="Main navigation">
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex flex-col gap-1.5 p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {[0, 1, 2].map((i) => <span key={i} className="block w-6 h-0.5 bg-white rounded" />)}
            </button>
          </nav>
        </header>

        <main className="flex flex-col lg:flex-row gap-4 flex-1">
          <OverviewSidebar
            user={user}
            completedActivities={completedActivities}
            consumedCalories={consumedCalories}
            streak={streak}
            dailyCalorieTarget={dailyCalorieTarget}
          />
          <div className="flex flex-col gap-4 flex-1">
            <DailyActivities
              activities={activities}
              completedActivityIds={completedActivityIds}
              onDone={handleActivityDone}
            />
            <CaloriesLog
              foods={foods}
              onConsume={handleFoodConsume}
              consumedFoodIds={consumedFoodIds}
            />
          </div>
        </main>

      </div>

      <ProfilePopup open={menuOpen} onClose={() => setMenuOpen(false)} onLogout={onLogout} user={user} />
    </div>
  );
}