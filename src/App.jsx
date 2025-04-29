import { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [notification, setNotification] = useState(null);

  // Show notification when count is multiple of 10
  
  useEffect(() => {
    if (count % 10 === 0 && count !== 0) {
      setNotification(`🎉 تبریک! شما به ${count} رسیدید!`);
      setTimeout(() => setNotification(null), 3000);
    }
  }, [count]);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 flex flex-col items-center justify-center p-4 transition-all duration-500`}>
      {/* Main counter card */}
      <div className={`bg-indigo-900/30 backdrop-blur-lg rounded-xl shadow-2xl p-8 max-w-md w-full text-center relative overflow-hidden border border-white/10`}>
        <div className={`absolute -top-10 -left-10 w-40 h-40 bg-blue-400 opacity-10 rounded-full`}></div>
        <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 opacity-10 rounded-full`}></div>
        
        <h1 className="text-4xl font-bold text-white mb-6 tracking-wider">شمارنده هوشمند</h1>
        
        <div className={`bg-indigo-800/40 backdrop-blur-md rounded-lg p-10 mb-8 border border-white/10`}>
          <div className="relative">
            <span className="block text-8xl font-bold text-white transition-all duration-300 transform"
                  style={{ textShadow: '0 4px 10px rgba(0,0,0,0.4)' }}>
              {count}
            </span>
            {count !== 0 && (
              <span className={`absolute -top-2 -right-2 bg-blue-400 px-2 py-1 rounded-full text-sm font-bold text-white shadow-lg`}>
                {count % 2 === 0 ? 'زوج' : 'فرد'}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 rtl:space-x-reverse">
          <button 
            onClick={() => setCount(count - 1)}
            className={`bg-blue-500 hover:bg-blue-600 text-white bg-opacity-90 font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50`}>
            -
          </button>
          <button 
            onClick={() => setCount(count + 1)}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50`}>
            +
          </button>
        </div>
        
        <button 
          onClick={() => setCount(0)} 
          className="mt-4 text-white hover:text-opacity-80 text-sm underline transition-colors">
          بازنشانی
        </button>
      </div>
      
      {/* Notification toast */}
      {notification && (
        <div className={`fixed bottom-4 right-4 bg-blue-400 text-white rounded-lg shadow-xl p-4 transition-all transform animate-bounce`}>
          {notification}
        </div>
      )}
    </div>
  );
};

export default App;