import { useRef } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  let countvalue = useRef(0);

  const handleClick = () => {
    countvalue.current += 2;
    setCount(countvalue.current + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="p-8 bg-white rounded-xl shadow-lg flex flex-col items-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Counter App</h2>
        
        <div className="flex items-center justify-center w-36 h-36 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg">
          <span className="text-5xl font-bold text-white">{count}</span>
        </div>
        
        <button 
          onClick={handleClick}
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          افزایش
        </button>
        
        <p className="text-gray-600 text-center">برای افزایش عدد شمارنده، کلیک کنید</p>
      </div>
    </div>
  );
};

export default App;