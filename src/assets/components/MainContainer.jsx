import ToolsBar from './ToolsBar'
import Cards from './Cards'
import LoadingRing from './LoadingRing'
import { useState } from 'react'

export default function Main({data, setData, originalData, loading, error}) {
    
    if (loading) return <LoadingRing />
    if (error) return <PageNotFound />

    const startVisibleDataAmount = 12;
    const [itemsToLoad, setItemsToLoad] = useState(startVisibleDataAmount);

    console.log(data[0])
    
    return (
        <main className="main grid-item">
            <ToolsBar data={data} originalData={originalData} setData={setData} setItemsToLoad={setItemsToLoad} startVisibleDataAmount={startVisibleDataAmount} />
            <Cards data={data} originalData={originalData} itemsToLoad = {itemsToLoad} setItemsToLoad={setItemsToLoad}  />
        </main>
    )
};
