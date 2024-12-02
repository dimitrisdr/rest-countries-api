import { Link } from "react-router-dom";
import DataTable from "./DataTable";
import MapLink from "./mapLink";

export default function Card({countryData}) {

    const BASE_PATH = import.meta.env.VITE_BASE_PATH || "/rest-countries-api/";

    const dataStructure = [
        {Population: new Intl.NumberFormat('de-DE').format(countryData.population)},
        {region: countryData.region},
        {Capital: countryData.capital}
    ]
    
    return (
        <section aria-label="card-section">

            <div className="card">
                <Link className="link" to={`${BASE_PATH}countries/${countryData.name.common}`} state={{data: countryData}}>
                <div className="img-container">
                    <img alt="Countrys flag image" src={countryData.flags.svg} className="img flag-img" />
                </div>
                </Link>
                <div className="country-info">
                    <div className="title-container flex-item">
                        <h2 className="title country-info__title fw-800 fs-500">{countryData.name.common}</h2>
                        <MapLink dataUrl={countryData.maps.googleMaps}/>
                    </div>
                    <DataTable data={dataStructure} /> 
                </div>
            </div>

        </section>
    )
};
