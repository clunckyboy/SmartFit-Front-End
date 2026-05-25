export default function FoodPopup({ food, consumed, onClose, onConsume}) {
  if (!food) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={onClose} />

      {/* Card */}
      <div className="relative z-10 w-full max-w-sm bg-gray-300 rounded-2xl p-5">

        <div className="flex items-center gap-4">
          {/* Emoji icon */}
          <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-4xl shrink-0 select-none">
            {food.emoji}
          </div>

          {/* Info makanan */}
          <div className="flex-1">
            <p className="text-black font-bold text-base leading-tight">{food.name}</p>
            <p className="text-gray-600 text-sm mt-1">{food.portion}</p>
            <p className="text-gray-600 text-sm">{food.kcal} kcal</p>
          </div>

          {/* Tombol centang */}
          {consumed ? (
            <button
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center cursor-pointer transition-colors shrink-0"
              aria-label="Unconsume"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
          </button>
          ) : (
            <button
              onClick={() => onConsume(food.id)}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-white flex items-center justify-center cursor-pointer transition-colors shrink-0"
              aria-label="Consume"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>
          )}
        </div>

      </div>
    </div>
  )
}