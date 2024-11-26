import { useEffect, useState, useRef } from "react"
import SwitchBtn from "./SwitchBtn";
export default function Header() {

    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') || 'light')
    const checkboxRef = useRef(null)
    
    function handleChange() {
        const nextTheme = localStorage.getItem('theme') === 'light'? 'dark': 'light';
        localStorage.setItem('theme', nextTheme)
        console.log(isDarkMode)
        setIsDarkMode(nextTheme)
    }

    useEffect(()=> {
        const thisTheme = localStorage.getItem('theme');
        document.body.classList.toggle('dark-mode', thisTheme === 'dark');
    }, [isDarkMode])

    useEffect(()=> {
        checkboxRef.current.checked = isDarkMode === 'dark'
    }, [])

    return (
        <div className="header-container">
            <header className="header flex-item">
                <h1 className="header__title fw-800 fs-600">Where in the world?</h1>
                <label className="header__switch-btn flex-item" htmlFor="toggle" >
                    <input className="toggle-btn" type="checkbox" name="toggle" id="toggle" ref={checkboxRef} onChange={handleChange} />
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff"><path d="M479.96-144Q340-144 242-242t-98-238q0-140 97.93-238t237.83-98q13.06 0 25.65 1 12.59 1 25.59 3-39 29-62 72t-23 92q0 85 58.5 143.5T648-446q49 0 92-23t72-62q2 13 3 25.59t1 25.65q0 139.9-98.04 237.83t-238 97.93Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffbb00"><path d="M479.77-288Q400-288 344-344.23q-56-56.22-56-136Q288-560 344.23-616q56.22-56 136-56Q560-672 616-615.77q56 56.22 56 136Q672-400 615.77-344q-56.22 56-136 56ZM216-444H48v-72h168v72Zm696 0H744v-72h168v72ZM444-744v-168h72v168h-72Zm0 696v-168h72v168h-72ZM269-642 166-742l51-55 102 104-50 51Zm474 475L642-268l49-51 103 101-51 51ZM640-691l102-101 51 49-100 103-53-51ZM163-217l105-99 49 47-98 104-56-52Z"/></svg>
                </label>
            </header>
        </div>
    )
};
