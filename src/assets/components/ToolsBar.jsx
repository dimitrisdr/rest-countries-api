import { useEffect, useState } from "react";
import SelectGroup from "./SelectGroup";
import InputGroup from "./InputGroup";
import ExtraTools from "./ExtraTools";

export default function ToolsBar({setData, originalData, setItemsToLoad, startVisibleDataAmount}) {
    
    const [searchData, setSearchData] = useState('');
    const [filterData, setFilterData] = useState('');
    const [extraToolsFilterData, setExtraToolsFilterData] = useState('')


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
                <ExtraTools />
            </div>
            <SelectGroup data={filterData} setFilterData={setFilterData} />
        </section>
    )
};
