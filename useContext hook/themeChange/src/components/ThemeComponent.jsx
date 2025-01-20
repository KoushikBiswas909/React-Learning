import React, { useContext } from 'react'
import { UserContext } from '../App'
import './style.css'

function ThemeComponent() {
    const {theme, setTheme} = useContext(UserContext)
    // const toggleTheme = () => {
    //     setTheme(theme === "light" ? "dark" : "light");  // Toggle theme
    //   };
  return (
    <div id='container' style={{backgroundColor: theme === "light" ? "red":"black"}}>
      <button onClick={() => {setTheme(theme === "light" ? "dark" : "light")}}>Change Theme</button>
    </div>
  )
}

export default ThemeComponent
