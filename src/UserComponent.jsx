
import { useState } from "react";

const UserComponent = () => {
  const [age, setAge] = useState(20);
  return (
    <div>
      <h1>UserComponent</h1>
      <button onClick={() => setAge((prev) => prev + 1)}>
        Change Age
      </button>
      <ul>
        <li>Name: Qasem</li>
        <li>Age: {age}</li>
        <li>Email: Qasem@gmail.com</li>
      </ul>
    </div>
  );
};

export default UserComponent;
