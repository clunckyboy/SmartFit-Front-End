const CHECKER = {
  backgroundImage: 'repeating-linear-gradient(45deg,#ccc 0,#ccc 1px,transparent 0,transparent 50%),repeating-linear-gradient(-45deg,#ccc 0,#ccc 1px,transparent 0,transparent 50%)',
  backgroundSize: '20px 20px',
};

export default function ActivityPopup({ activity, completed, onClose, onDone }) {
  if (!activity) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">

      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={onClose} />

      {/* card */}
      <div className="relative z-10 w-full max-w-3xl bg-gray-300 rounded-2xl p-8 flex flex-col gap-6">

        <h2 className="text-3xl font-black text-black">{activity.name}</h2>

        <div className="flex gap-6 items-start">

          {activity.image ? (
            <img 
              src={activity.image} 
              alt={activity.name}
              className="w-96 h-64 rounded-xl object-cover shrink-0 border border-black" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
          ) : null} 

          <div 
            className="w-96 h-64 rounded-xl border border-black shrink-0"
            style={{ ...CHECKER, display: activity.image ? 'none' : 'block'}}
            role="img"
            aria-label="Activity image placeholder"
          />
          <p className="text-black font-semibold text-base leading-relaxed">
            {activity.description}
          </p>
        </div>

        <div className="flex justify-end">
          {completed ? (
            <button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-2.5 rounded-xl cursor-pointer transition-colors"
            >
              Close
            </button>
          ) : (
            <button
              onClick={() => onDone(activity.id)}
              className="bg-green-900 hover:bg-green-800 text-white font-semibold px-6 py-2.5 rounded-xl cursor-pointer transition-colors"
            >
              Done
            </button>
          )}
        </div>

      </div>
    </div>
  )
}