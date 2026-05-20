import { useState, useMemo } from "react";
import OverviewSidebar from "../components/OverviewSidebar";
import DailyActivities from "../components/DailyActivities";
import CaloriesLog from "../components/CaloriesLog";
import ProfilePopup from "../components/ProfilePopUp";
import { dailyActivities, foodData } from "../utils/dummyData";

const USER_GOAL = "lose_weight";

function getRandomItems(arr, count) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, count); 
}

export default function DashboardPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const activities = useMemo(() => getRandomItems(dailyActivities[USER_GOAL], 3), []);
  const foods = useMemo(() => foodData[USER_GOAL].slice(0, 6), []);

  return (
    <div
      className="w-full h-screen fixed inset-0 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/landing-page-background.png')", backgroundColor: "#166534" }}
    >
      <div className="fixed inset-0 bg-green-900/50 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full p-4 gap-4">

        <header className="flex items-center justify-between px-2 py-1">
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

        <main className="flex flex-col lg:flex-row gap-4 flex-1 overflow-hidden">
          <OverviewSidebar />
          <div className="flex flex-col gap-4 flex-1">
            <DailyActivities activities={activities} />
            <CaloriesLog foods={foods} />
          </div>
        </main>

      </div>

      <ProfilePopup open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};
