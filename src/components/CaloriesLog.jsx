import { useState } from 'react';
import FoodPopup from './FoodPopup';

function FoodItem({ food, onClick }) {
  return (
    <article className="bg-white/80 rounded-lg p-3 flex items-center gap-3 hover:bg-white transition-colors shadow-sm" onClick={onClick}>
      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center shrink-0 text-2xl select-none" role="img" aria-label="food icon">
        {food.emoji}
      </div>
      <div>
        <p className="text-gray-800 font-semibold text-sm leading-tight">{food.name}</p>
        <p className="text-gray-400 text-xs mt-0.5">{food.portion}</p>
        <p className="text-gray-500 text-xs mt-0.5">{food.kcal} kcal</p>
      </div>
    </article>
  );
}

export default function CaloriesLog({ foods = [] }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section aria-label="Today Calories food log" className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 flex-1 overflow-y-auto scrollbar-hide">
        <h2 className="text-black font-bold text-lg text-center mb-4">Today Calories</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3" role="list">
          {foods.map((item) => (
            <li key={item.id}>
              <FoodItem food={item} onClick={() => setSelected(item)} />
            </li>
          ))}
        </ul>
      </section>

      <FoodPopup food={selected} onClose={() => setSelected(null)} />
    </>
  );
}