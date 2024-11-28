import { useEffect, useMemo, useRef, useState } from "react"
import Card from "./Card"

export default function Cards({data, itemsToLoad, setItemsToLoad}) {

    const [isallDataLoaded, setIsAllDataLoaded] = useState(false);
    const loadRef = useRef(null);

    const visibleData = useMemo(()=> data.slice(0, itemsToLoad), [data, itemsToLoad])

    useEffect(() => { 
        setIsAllDataLoaded(data.length <= visibleData.length);
    }, [data.length, visibleData.length]);

    useEffect(()=> {
        const observer = new IntersectionObserver(
            (entries) => {
                const target = entries[0]
                if (target.isIntersecting && !isallDataLoaded){
                    setItemsToLoad( (prevItems ) => prevItems + 24)
                }
            }
        )
        if (loadRef.current) observer.observe(loadRef.current)
        return () => {observer.disconnect()} 
    }, [visibleData, isallDataLoaded])

    return (
            <>
            <section className="cards-section grid-item" aria-label="cards section">
                {visibleData.map(country => <Card 
                    key={country.cca3}
                    countryData={country}
                />)}
            </section> 
            {!isallDataLoaded && <div ref={loadRef} className="loading-more">Loading More...</div>}
        </>
    ) 
};
