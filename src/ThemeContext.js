import React, { useState,createContext } from 'react'

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [theme,setTheme] = useState('dark')

    const toggleTheme = () => {
        let shiftedTheme = theme === 'dark'? 'light' : 'dark';
        console.log(shiftedTheme);
        setTheme(shiftedTheme);
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}