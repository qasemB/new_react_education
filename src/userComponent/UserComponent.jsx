import { useEffect, useState } from "react";
import "./UserComponent.css";

const UserComponent = () => {
  const [age, setAge] = useState(20);

  useEffect(() => {
    console.log("Send a request to the server");
  
    const handleClick = () => {
      console.log("Age is 20");
    };
  
    const element = document.getElementById("age");
    element?.addEventListener("click", handleClick);
  
    return () => {
      console.log("Hoping to meet you.");
      element?.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    if (age === 30) {
      console.log("Age is 30");
    }
  }, [age]);

  return (
    <div className="user-container">
      <h1 className="user-title">UserComponent</h1>
      <button className="user-btn" onClick={() => setAge((prev) => prev + 1)}>
        Change Age
      </button>
      <ul className="user-info">
        <li>Name: Qasem</li>
        <li>Age: <span className="user-age">{age}</span></li>
        <li>Email: Qasem@gmail.com</li>
      </ul>
    </div>
  );
};

export default UserComponent;
