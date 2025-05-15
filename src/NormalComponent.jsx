import { useMemo, useState } from "react";

const NormalComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const heavyCalculation = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 1e8; i++) {
      total += i;
    }
    console.log("🔁 Heavy calculation is running...");
    return total + count;
  }, [count])

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-4 border border-gray-200">
      <h2 className="text-2xl font-bold text-indigo-600">Without useMemo</h2>
      <p className="text-gray-700 font-medium">Result: <span className="text-indigo-500 font-bold">{heavyCalculation}</span></p>
      <div className="space-y-3">
        <button 
          onClick={() => setCount((prev) => prev + 1)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Add Count
        </button>
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Type something..."
        />
      </div>
    </div>
  );
};

export default NormalComponent;
