import { useEffect, useRef, useState } from "react"
import Card from "./Card"

export default function Cards({data, visibleDataAmount, itemsToLoad, setItemsToLoad}) {

    const [visibleData, setVisibleData] = useState([]);
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
                        setItemsToLoad((prevItems )=> prevItems + 4)
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
