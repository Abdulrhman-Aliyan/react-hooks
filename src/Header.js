import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const themeContext = useContext(ThemeContext);
  let style = {}

  if(themeContext.theme === 'dark') {
    style = {
        backgroundColor: '#161616',
        color: '#fff'
    }
  } else {
    style = {
        backgroundColor: '#fff',
        color: '#000'
    }
  }
  return (
    <div style={style}>

        <h1>Header</h1>
        <hr />
    </div>
  )
}

export default Header