const foodItems = [
  { id: 1, name: "100g Chicken Breast", kcal: 165, emoji: "🍗" },
  { id: 2, name: "100g Chicken Breast", kcal: 165, emoji: "🍗" },
  { id: 3, name: "100g Chicken Breast", kcal: 165, emoji: "🍗" },
  { id: 4, name: "100g Chicken Breast", kcal: 165, emoji: "🍗" },
  { id: 5, name: "100g Chicken Breast", kcal: 165, emoji: "🍗" },
  { id: 6, name: "100g Chicken Breast", kcal: 165, emoji: "🍗" },
  { id: 7, name: "100g Chicken Breast", kcal: 165, emoji: "🍗" },
  { id: 8, name: "100g Chicken Breast", kcal: 165, emoji: "🍗" },
  { id: 9, name: "100g Chicken Breast", kcal: 165, emoji: "🍗" },
];

function FoodItem({ name, kcal, emoji }) {
  return (
    <article className="bg-white/80 rounded-lg p-3 flex items-center gap-3 hover:bg-white transition-colors shadow-sm">
      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center shrink-0 text-2xl select-none" role="img" aria-label="food icon">
        {emoji}
      </div>
      <div>
        <p className="text-gray-800 font-semibold text-sm leading-tight">{name}</p>
        <p className="text-gray-500 text-xs mt-0.5">{kcal} kcal</p>
      </div>
    </article>
  );
}

export default function CaloriesLog() {
  return (
    <section aria-label="Today Calories food log" className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 flex-1">
      <h2 className="text-black font-bold text-lg text-center mb-4">Today Calories</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3" role="list">
        {foodItems.map((item) => <li key={item.id}><FoodItem {...item} /></li>)}
      </ul>
    </section>
  );
}