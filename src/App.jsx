import { useState } from "react";
import ChildComponent from "./ChildComponent";
import Counter from "./Counter";
const App = () => {
  const [count, setCount] = useState(0);
  console.log("App component rendered");
  
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ChildComponent />
      <Counter count={count} setCount={setCount} />
    </div>
  );
};

export default App;