import React from "react";

import { BsMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

const Header = ({handleToggleDarkMode, currentMode, handleToggleLogout}) => {
    return (
        <div className="header">
            <h1>Keepaki</h1>
            {/* <button onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode )} className="save">{!currentMode ? <BsSunFill /> : <BsMoonFill />}</button> */}

            {currentMode ? <BsSunFill className="mode-toggle-light" onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode )}/> : <BsMoonFill className="mode-toggle-dark" onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode )}/>}
            <button onClick={() => handleToggleLogout()} className="save">Log out</button>
        </div>
    )
}

export default Header;