import SelectGroup from "./SelectGroup"
import InputGroup from "./InputGroup"
import { useEffect, useState } from "react";

export default function ToolsBar({setData, originalData, setItemsToLoad, startVisibleDataAmount}) {
    
    const [searchData, setSearchData] = useState('');
    const [filterData, setFilterData] = useState('');

    function updateData() {
        const newData = originalData.filter(countryData => {
            setItemsToLoad(startVisibleDataAmount);
            return countryData.name.common.toLowerCase().includes(searchData.toLowerCase()) && countryData.region.includes(filterData)
        }
        )
        setData(newData);
    }

    console.log(originalData[0])

    useEffect(()=> {
        updateData();
    }, [searchData, filterData])  

    return (
        <section className="toolsBar-section flex-item" aria-label="Tools section">
            <div className="tools-bar-section__search-and-extra flex-item">
                <InputGroup data={searchData} setSearchData={setSearchData} />
                <div className="extra-tools">
                    <button className="btn extra-tools-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#858585"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg>
                    </button>
                    <ul className="extra-tools-items">
                        <li className="extra-tools-item flex-item">
                            <label htmlFor="" className="extra-tools-item-label">UN member</label>
                            <input type="checkbox" className="extra-tools-item-input" />
                        </li>
                        <li className="extra-tools-item flex-item">
                            <label htmlFor="" className="extra-tools-item-label">Inependent</label>
                            <input type="checkbox" className="extra-tools-item-input" />
                        </li>
                        <li className="extra-tools-item flex-item">
                            <label htmlFor="" className="extra-tools-item-label">UN member</label>
                            <input type="checkbox" className="extra-tools-item-input" />
                        </li>
                    </ul>
                </div>
            </div>
            <SelectGroup data={filterData} setFilterData={setFilterData} />
        </section>
    )
};
