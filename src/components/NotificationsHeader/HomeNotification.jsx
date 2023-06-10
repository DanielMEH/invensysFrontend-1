import React, { useState, useMemo } from "react";
import notyfy from "../../assets/img/notify.jpg";

export const HomeNotification = () => {
  const [darkMode, setDarkMode] = useState(false);
  useMemo(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);
  return darkMode ? null : (
    <img src={notyfy} alt="" className=" w-4/5 mx-auto h-4/5 object-cover" />
  );
};
