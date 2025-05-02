import { useEffect, useState, useRef } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef(null);
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-400 to-indigo-600 p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">فرم ورودی</h2>
        
        <div className="relative">
          <input 
            ref={inputRef}
            id="my-input" 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-3 text-center text-lg border-2 border-teal-300 rounded focus:ring-4 focus:ring-teal-200 focus:border-teal-500 outline-none transition duration-300 bg-gray-50"
            placeholder="متن خود را وارد کنید..."
          />

          {/* <AppInput
            ref={inputRef}
            id="my-input" 
            type="text" 
          /> */}
          
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
        
        {inputValue && (
          <div className="mt-4 p-4 bg-teal-50 rounded border border-teal-200">
            <p className="text-teal-800 text-center">متن وارد شده: <span className="font-bold">{inputValue}</span></p>
          </div>
        )}
        
        <div className="flex justify-center space-x-4 space-x-reverse rtl gap-4">
          <button 
            className="px-6 py-2 bg-teal-600 text-white font-medium rounded shadow-md hover:bg-teal-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            onClick={() => setInputValue("")}
          >
            پاک کردن
          </button>
          <button 
            className="px-6 py-2 bg-indigo-600 text-white font-medium rounded shadow-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;