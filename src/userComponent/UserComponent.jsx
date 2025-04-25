import { useEffect, useState } from "react";
import styles from "./UserComponent.module.css";

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
    <div className={`some-class ${styles.userContainer}`}>
      <h1 className={styles["user-title"]}>UserComponent</h1>
      <button className={styles["user-btn"]} onClick={() => setAge((prev) => prev + 1)}>
        Change Age
      </button>
      <ul className={styles["user-info"]}>
        <li>Name: Qasem</li>
        <li>Age: <span className={styles["user-age"]}>{age}</span></li>
        <li>Email: Qasem@gmail.com</li>
      </ul>
    </div>
  );
};

export default UserComponent;
