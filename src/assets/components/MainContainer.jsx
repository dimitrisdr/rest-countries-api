import ToolsBar from './ToolsBar'
import Cards from './Cards'
import LoadingRing from './LoadingRing'

export default function Main({data, setData, originalData, loading, error}) {

    if (loading) return <LoadingRing />
    if (error) return <PageNotFound />
 
    return (
        <main className="main grid-item">
            <ToolsBar data={data} originalData={originalData} setData={setData}/>
            <Cards data={data} originalData={originalData} />
        </main>
    )
};
