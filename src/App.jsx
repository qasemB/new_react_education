import { useState } from "react";
import ChildComponent from "./ChildComponent";
const App = () => {
  const [text, setText] = useState("Hello World.sdsdasd..");
  const changeText = () => {
    setText("Hello World");
  };
  return (
    <div>
      <button onClick={changeText}>Click me</button>
      <ChildComponent text={text} />
    </div>
  );
};

export default App;
