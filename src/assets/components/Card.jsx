import { Link } from "react-router-dom";
import DataTable from "./DataTable";
export default function Card({countryData}) {


    const dataStructure = [
        {Population: new Intl.NumberFormat('de-DE').format(countryData.population)},
        {region: countryData.region},
        {Capital: countryData.capital}
    ]
    
    return (
        <Link className="link" to={`/countries/${countryData.name.common}`} state={{data: countryData}}>

            <div className="card">
                <img src={countryData.flags.svg} className="img flag-img" />
                <div className="country-info">
                    <h2 className="title country-info__title fw-800 fs-500">{countryData.name.common}</h2>
                    <DataTable data={dataStructure} /> 
                </div>
            </div>

        </Link>
    )
};
