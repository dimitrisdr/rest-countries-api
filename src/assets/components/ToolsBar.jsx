import { useEffect, useState } from "react";
import SelectGroup from "./SelectGroup";
import InputGroup from "./InputGroup";
import ExtraTools from "./ExtraTools";

export default function ToolsBar({setData, originalData, setItemsToLoad, startVisibleDataAmount}) {

    const [searchData, setSearchData] = useState('');
    const [filterData, setFilterData] = useState('');
    const [extraToolsData, setExtraToolsData] = useState({
            independent: {title:'Independent', isSelected: true}, 
            unMember: {title:'United Nations Member', isSelected: false},
            landlocked: {title:'Land Locked', isSelected: false}
        })
  
    function extraFilter(elementData, toolsData=extraToolsData){
        const keysToCheck = Object.keys(toolsData).filter(e =>  toolsData[e].isSelected === true)
        const isAllValid = keysToCheck.every(e => {
            return toolsData[e].isSelected === elementData[e]})
        return isAllValid
    }

    function updateData() {
        const newData = originalData.filter(countryData => 
                    countryData.name.common.toLowerCase().includes(searchData.toLowerCase()) 
                    && countryData.region.includes(filterData)
                    && extraFilter(countryData)
        )
        setItemsToLoad(startVisibleDataAmount);
        setData(newData);
    }


    useEffect(()=> {
        updateData();
    }, [searchData, filterData, extraToolsData])  

    return (
        <section className="toolsBar-section flex-item" aria-label="Tools section">
            <div className="tools-bar-section__search-and-extra flex-item">
                <InputGroup data={searchData} setSearchData={setSearchData} />
                <ExtraTools extraToolsData={extraToolsData} setExtraToolsData={setExtraToolsData} />
            </div>
            <SelectGroup data={filterData} setFilterData={setFilterData} />
        </section>
    )
};
