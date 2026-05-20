const CHECKER = {
  backgroundImage: 'repeating-linear-gradient(45deg,#ccc 0,#ccc 1px,transparent 0,transparent 50%),repeating-linear-gradient(-45deg,#ccc 0,#ccc 1px,transparent 0,transparent 50%',
  backgroundSize: '20px 20px',
};

export default function ActivityPopup({ activity, onClose }) {
  if (!activity) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">

      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={onClose} />

      {/* card */}
      <div className="relative z-10 w-full max-w-3xl bg-gray-300 rounded-2xl p-8 flex flex-col gap-6">

        <h2 className="text-3xl font-black text-black">{activity.name}</h2>

        <div className="flex gap-6 items-start">
          <div 
            className="w-96 h-64 rounded-xl border border-black shrink-0"
            style={CHECKER}
            role="img"
            aria-label="Activity image placeholder"
          />
          <p className="text-black font-semibold text-base leading-relaxed">
            {activity.description}
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-green-900 hover:bg-green-800 text-white font-semibold px-6 py-2.5 rounded-xl cursor-pointer transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  )
}