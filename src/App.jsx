import { useState } from "react";
import UserComponent from "./userComponent/UserComponent";
import GuestComponent from "./guestComponent/GuestComponent";

const App = () => {
  const [isLogined, setIsLogined] = useState(false);
  return (
    <div className="app-container">
      <div className="app-background"></div>
      <div className="nav-bar">
        <button 
          className={`toggle-btn ${isLogined ? 'logout' : 'login'}`} 
          onClick={() => setIsLogined(!isLogined)}
        >
          {isLogined ? "Logout" : "Login"}
        </button>
      </div>
      
      <div className="app-content">
        {isLogined ? <UserComponent /> : <GuestComponent />}
      </div>
    </div>
  );
};

export default App;