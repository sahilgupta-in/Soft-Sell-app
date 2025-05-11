import React from 'react'
import { useTheme } from '../Context/ThemeContext'
import dayMode from "../assets/dayMode.png";
import nightMode from "../assets/nightMode.png";

function Themeswitch() {
    const {theme, toggletheme} = useTheme();

  return (
    <div>
      <div onClick={toggleTheme}>
        {theme === "light" ? (
          <img src={dayMode} alt="day mode" className="w-8 h-auto" />
        ) : (
          <img src={nightMode} alt="night mode" className="w-8 h-auto" />
         )}
      </div>
    </div>
  );
}


export default Themeswitch
