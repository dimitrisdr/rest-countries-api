import { useState } from "react"

export default function ExtraTools() {
    
    const [isOpened, setIsOpened] = useState(false);
    
    const extraToolsData = [{'independent': 'Independent'}, 
        {'unMember':'United Nations Member'}, 
        {'landlocked':'Land Locked'}]

    function handleChange(e) {
        e.target.parentElement.classList.toggle('green-bg', e.target.checked)
    }
    
    return (
        <div className="extra-tools">
            <button onClick={() => setIsOpened(!isOpened)} className="btn extra-tools-btn">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#858585"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg>
            </button>
            {isOpened &&  
            <ul className="extra-tools-items grid-item">
                {extraToolsData.map(e => 
                    <li key={Object.values(e)} className="extra-tools-item flex-item">
                        <label htmlFor={Object.keys(e)} className="extra-tools-item-label">
                            <span>{Object.values(e)}</span>
                        </label>
                        <div className={Object.values(e)[0] === 'Independent'?"extra-tools__input-container green-bg": "extra-tools__input-container"}>
                            <input  type="checkbox" 
                                    onChange={handleChange}  
                                    name={Object.values(e)} 
                                    id={Object.keys(e)} 
                                    defaultChecked={Object.values(e)[0] === 'Independent'}
                                    className="extra-tools-item-input toggle-btn"
                            />
                        </div>
                    </li>
                )}

            </ul>}

        </div>
    )
};
