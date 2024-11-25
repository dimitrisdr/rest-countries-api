import { useEffect, useRef, useState } from "react"
import InputItem from "./InputItem"


export default function SelectGroup({filterData, setFilterData}) {

    const data = ['All Regions', 'Africa', 'America', 'Europe', 'Oceania']
    const [isOpened, setIsOpened] = useState(false)
    const [isSelected, setIsSelected] = useState('All Regions')
    const isOptionsClosedRef = useRef(null)

    useEffect(()=> {
        function handleOutsideClick(e) {
            if (isOpened && !isOptionsClosedRef.current.contains(e.target)) setIsOpened(false)
        }

        document.addEventListener('mousedown', handleOutsideClick)
        return () => document.removeEventListener('mousedown', handleOutsideClick)
    }, [isOpened])

    return (
        <div  className="select-container grid-item tools-item">
            <button 
            className="btn input-btn flex-item"
            onClick={()=> setIsOpened(!isOpened)}
            >
            <span className="flex-item input-text">{isSelected}</span>
            </button>
            {  isOpened && 
                <ul ref={isOptionsClosedRef} className="options-container grid-item">
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
