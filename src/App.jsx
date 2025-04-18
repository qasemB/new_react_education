import { useState } from "react";
import UserComponent from "./UserComponent";
import GuestComponent from "./GuestComponent";

const App = () => {
  const [isLogined, setIsLogined] = useState(false);
  return (
    <div>
      <button onClick={() => setIsLogined(!isLogined)}>
        {isLogined ? "Logout" : "Login"}
      </button>
      
      {isLogined ? <UserComponent /> : <GuestComponent />}
    </div>
  );
};

export default App;
