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
      <ChildComponent text={text}>
        <p>children</p>
        <p>children</p>
        <p>children</p>
        <p>children</p>
        <p>children</p>
        <p>children</p>
      </ChildComponent>
    </div>
  );
};

export default App;
