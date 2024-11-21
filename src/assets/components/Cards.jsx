import { useEffect, useRef, useState } from "react"
import Card from "./Card"

export default function Cards({data}) {
    const visibleDataAmount = 12;
    const [visibleData, setVisibleData] = useState([]);
    const [itemsToLoad, setItemsToLoad] = useState(visibleDataAmount);
    const [isallDataLoaded, setIsAllDataLoaded] = useState(false);
    const loadRef = useRef(null);

    useEffect(()=> {
        setVisibleData(data.slice(0, itemsToLoad))
    }, [data, itemsToLoad])

    useEffect(()=> {
        const observer = new IntersectionObserver(
            (entries) => {
                const target = entries[0]
                
                if (target.isIntersecting){
                    if (visibleData.length < data.length){
                        setItemsToLoad((prevItems )=> prevItems + visibleDataAmount)
                    }else {
                        setIsAllDataLoaded(true)
                        observer.disconnect()
  
                    }   
                }
            }
        )
        if (loadRef.current) observer.observe(loadRef.current)
        return () => observer.disconnect() 
    }, [visibleData])

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
