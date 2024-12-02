import { useEffect, useRef, useState } from "react"
import InputItem from "./InputItem"


export default function SelectGroup({filterData, setFilterData}) {

    const data = ['All Regions', 'Africa', 'America', 'Europe', 'Oceania']
    const [isOpened, setIsOpened] = useState(false)
    const [isSelected, setIsSelected] = useState('All Regions')
    const optionsRef = useRef(null)
    const btnRef = useRef(null)

    useEffect(()=> {
        function handleOutsideClick(e) {
            if (isOpened && !optionsRef.current.contains(e.target) && !btnRef.current.contains(e.target)) {
                setIsOpened(false)
            }
        }
        console.log('outside click fired', 'setIsOpened: ',isOpened)
        document.addEventListener('mousedown', handleOutsideClick)
        return () => document.removeEventListener('mousedown', handleOutsideClick)
    }, [isOpened])

    return (
        <div className="select-container grid-item tools-item">
            <button 
            className="btn input-btn flex-item"
            onClick={(e)=> {
                e.stopPropagation(); // Prevent the outside click handler from firing
                setIsOpened((prev) => !prev); // Toggle the dropdown state
            }}
            ref={btnRef}
            >
            <span className="flex-item input-text">{isSelected}</span>
            </button>
            {  isOpened && 
                <ul ref={optionsRef} className="options-container grid-item">
                    {data.map((e) => <InputItem key={e}
                     name={e} 
                     isOpened={isOpened} 
                     setIsOpened={setIsOpened} 
                     setIsSelected={setIsSelected}
                     filterData = {filterData}
                     setFilterData = {setFilterData} 
                     />)
                    }
                </ul>
            }
        </div>
    )
};
