import { useEffect, useRef, useState } from "react"
import Card from "./Card"

export default function Cards({data}) {
    const visibleDataAmount = 12
    const [visibleData, setVisibleData] = useState([])
    const [itemsToLoad, setItemsToLoad] = useState(visibleDataAmount)
    const loadRef = useRef(null)

    useEffect(()=> {
        setVisibleData(data.slice(0, itemsToLoad))
        console.log(visibleData)
    }, [data, itemsToLoad])

    useEffect(()=> {
        const observer = new IntersectionObserver(
            (entries) => {
                const target = entries[0]
                
                if (target.isIntersecting){
                    setItemsToLoad((prevItems )=> prevItems + visibleDataAmount)
                }
            }
        )
        if (loadRef.current) observer.observe(loadRef.current)
        return () => observer.disconnect() 
    }, [])

    return (
        <>
        <section className="cards-section grid-item" aria-label="cards section">
            {visibleData.map(country => <Card 
                key={country.cca3}
                countryData={country}
            />)}
        </section> 
        <div ref={loadRef} className="loading-more">Loading More...</div>
        </>
    ) 
};
