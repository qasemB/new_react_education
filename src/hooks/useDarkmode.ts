import { useCallback, useEffect } from "react";

export const useDarkmode = () => {
  const setDark = useCallback(() => {
    localStorage.setItem("darkmode", "1");
    document.body.classList.add("dark");
  }, []);

  const setLight = () => {
    localStorage.setItem("darkmode", "0");
    document.body.classList.remove("dark");
  };
  
  const isDark = useCallback(() => {
    const lastStatus = localStorage.getItem("darkmode");
    return Number(lastStatus);
  }, []);

  const initDarkmode = useCallback(() => {
    if (isDark()) setDark();
  }, [isDark, setDark]);

  useEffect(() => {
    initDarkmode();
  }, [initDarkmode]);

  return {
    setDark,
    setLight,
    isDark,
  };
};
