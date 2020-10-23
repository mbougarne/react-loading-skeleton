import React, { useContext } from 'react' 
import RootContext from '../context/context'

const ThemeToggle = () => {

    let [mode, setMode] = useContext(RootContext)

    const toggleTheme = () => setMode(mode === 'light' ? 'dark' : 'light')

    return (
        <button className="btn-toggle" onClick={toggleTheme}>
        {mode === 'light' ? "Night 🌙" : "Day ☀️"}
        </button>
    )
}

export default ThemeToggle