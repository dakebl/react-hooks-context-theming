import React, { useState, createContext, useEffect } from 'react';

const ThemeContext = createContext({});
const ThemeConsumer = ThemeContext.Consumer;

function ThemeProvider(props) {
    const [theme, setTheme] = useState({...props.theme});
    const [themeActive, setThemeActive] = useState(true);

    const toggleTheme = () => setThemeActive(!themeActive);

    useEffect(() => {
      setTheme(themeActive ? {...props.theme} : {});
    }, [themeActive]);

    return (
      <ThemeContext.Provider value={{theme, themeActive, toggleTheme}}>
        {props.children}
      </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider, ThemeConsumer };