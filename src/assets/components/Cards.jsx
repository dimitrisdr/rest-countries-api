import Card from "./Card"

export default function Cards({data}) {

    return (
        <section className="cards-section grid-item" aria-label="cards section">
             {data.map(country => <Card 
                key={country.cca3}
                countryData={country}
             />)}
        </section> 
    ) 
};
