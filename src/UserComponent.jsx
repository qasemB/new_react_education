import { useEffect, useState } from "react";

const UserComponent = () => {
  const [age, setAge] = useState(20);

  useEffect(() => {
    //Mount
    console.log("Send a request to the server");

    return () => {
      //Unmount
      console.log("Hoping to meet you.");
    };
  }, []);

  useEffect(() => {
    if (age === 30) {
      console.log("Age is 30");
    }
  }, [age]);

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