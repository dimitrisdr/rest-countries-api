import ToolsBar from './ToolsBar'
import Cards from './Cards'
import LoadingRing from './LoadingRing'
import { useState } from 'react'
import SwitchBtn from './SwitchBtn'

export default function Main({data, setData, originalData, loading, error}) {
    
    if (loading) return <LoadingRing />
    if (error) return <PageNotFound />
    const startVisibleDataAmount = 24;
    const [itemsToLoad, setItemsToLoad] = useState(startVisibleDataAmount);

    return (
        // <section className="tools-section" aria-label="extra options section">
        //     <SwitchBtn htmlFor={'UnMember'}>
        //         <span className="switchLabel">UN member</span>
        //     </SwitchBtn>
        // </section>
        <main className="main grid-item">
            <ToolsBar data={data} originalData={originalData} setData={setData} setItemsToLoad={setItemsToLoad} startVisibleDataAmount={startVisibleDataAmount} />
            <Cards data={data} originalData={originalData} itemsToLoad = {itemsToLoad} setItemsToLoad={setItemsToLoad}  />
        </main>
    )
};
