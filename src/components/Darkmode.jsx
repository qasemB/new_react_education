import { FiMoon, FiSun } from "react-icons/fi";
import { useDarkmode } from "../hooks/useDarkmode";


const Darkmode = () => {
  const { setDark, setLight } = useDarkmode();
  return (
    <span className="cursor-pointer transform dark:rotate-90 transition-all duration-300">
      <FiMoon  className="dark:hidden size-app_24" onClick={setDark} />
      <FiSun className="hidden dark:inline size-app_24" onClick={setLight} />
    </span>
  );
};

export default Darkmode;
