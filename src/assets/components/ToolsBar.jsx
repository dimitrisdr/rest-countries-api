import SelectGroup from "./SelectGroup"
import InputGroup from "./InputGroup"
import { useEffect, useState } from "react";

export default function ToolsBar({setData, originalData}) {
    
    const [searchData, setSearchData] = useState('');
    const [filterData, setFilterData] = useState('')

    function updateData() {
        const newData = originalData.filter(countryData => {
            // console.log(filterData)
            return countryData.name.common.toLowerCase().includes(searchData.toLowerCase()) && countryData.region.includes(filterData)
        }
        )
        // console.log(newData)
        setData(newData)
    }

    useEffect(()=> {
        updateData()
    }, [searchData, filterData])  

    return (
        <section className="toolsBar-section flex-item" aria-label="Tools section">
            <InputGroup data={searchData} setSearchData={setSearchData} />
            <SelectGroup data={filterData} setFilterData={setFilterData} />
        </section>
    )
};
