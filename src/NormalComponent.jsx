import { useCallback, useState } from "react";

const OptimizedComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("default");

  const handleAddCount = useCallback(() => {
    console.log("🔄 Button clicked");
    setCount((prev) => prev + 1);
  }, []);

  console.log("Component re-rendered");

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-4 border border-gray-200">
      <h2 className="text-2xl font-bold text-green-600">With useCallback</h2>
      <p className="text-gray-700 font-medium">
        Count: <span className="text-green-500 font-bold">{count}</span>
      </p>
      <div className="flex gap-2 flex-col">
        <button
          onClick={handleAddCount}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Add Count
        </button>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          placeholder="Type something..."
        />
      </div>
    </div>
  );
};

export default OptimizedComponent;
