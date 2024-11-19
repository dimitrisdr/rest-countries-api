import { useEffect, useState, useRef } from "react"

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
                <label className="header__dark-mode-container flex-item" htmlFor="toggle" onChange={handleChange}>
                    <input type="checkbox" name="toggle" id="toggle" ref={checkboxRef} />
                    <i className="fa-solid fa-moon"></i>
                    <i className="fa-solid fa-sun"></i>
                </label>
            </header>
        </div>
    )
};
