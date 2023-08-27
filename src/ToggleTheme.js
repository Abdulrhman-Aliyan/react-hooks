import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const ToggleTheme = () => {
    const themeContext = useContext(ThemeContext)
  return (
    <button onClick={themeContext.toggleTheme}>
        Toggle theme
    </button>
  );
}

export default ToggleTheme;