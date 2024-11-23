import { useEffect, useRef, useState } from "react"
import InputItem from "./InputItem"


export default function SelectGroup({filterData, setFilterData}) {

    const data = ['All Regions', 'Africa', 'America', 'Europe', 'Oceania']
    const [isOpened, setIsOpened] = useState(false)
    const [isSelected, setIsSelected] = useState('All Regions')
    const isOptionsClosedRef = useRef()

    useEffect(()=> {
        function handleOutsideClick(e) {
            if (isOpened === false) {
                return
            } else {
                if (e.target !== isOptionsClosedRef.current){
                    console.log('options not clicked')
                    setIsOpened(false)
                }else {
                    console.log('options clicked')
                }
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)
        return () => document.removeEventListener('mousedown', handleOutsideClick)
    }, [isOpened])

    return (
        <div ref={isOptionsClosedRef} className="select-container grid-item tools-item">
            <button 
            className="btn input-btn flex-item"
            onClick={()=> setIsOpened(!isOpened)}
            >
            <span className="flex-item input-text">{isSelected}</span>
            </button>
            {  isOpened && 
                <ul className="options-container grid-item">
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
