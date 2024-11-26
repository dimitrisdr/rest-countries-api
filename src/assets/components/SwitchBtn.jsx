export default function SwitchBtn({htmlFor, children}) {
    console.log(htmlFor)
    function handleChange() {
        
    }

    return (
        <div className="extra-options-item flex-item">
            {children}
            <label className="header__switch-btn flex-item" htmlFor={htmlFor}>
                <input className="toggle-btn" type="checkbox" name={htmlFor} id={htmlFor} onChange={handleChange} />
            </label>
        </div>
    )
};
