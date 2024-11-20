import { useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';
import DataTable from '../components/DataTable';


export default function CountryDetail() {
    let location = useLocation()
    const data =location.state.data

    const dataSturctureMain = [
        {'Native Name': data.name.common  || ''},
        {'Population': new Intl.NumberFormat('de-DE').format(data.population)  || ''},
        {'Region': data.region || ''},
        {'Sub Region':data.subregion || data.region},
        {'Capital': data.capital[0]  || ''}
    ]   

    const dataSturctureSecondary = [
        {'Top Level Domain': data.tld[0] || ''},
        {'Currencies': Object.values(data.currencies)[0].name || ''},
        {'Languages':Object.values(data.languages).join(' ')},
]



  return (
    <section className='country-data-container'>
        <div className="container">
            <Link className='back-btn link flex-item' to ='/rest-countries-api/'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                Back 
            </Link>
            <div className="country-data grid-item container">
                <div className="img-container">
                    <img src={data.flags.svg  || ''} alt="image" className="img" />
                </div>
                <div className="country-data__info grid-item">
                    <h2 className="country-name title fw-800 fs-600">{data.name.official  || ''}</h2>
                    <div className="tables-container grid-item">
                        <DataTable data={dataSturctureMain}/>
                        <DataTable data={dataSturctureSecondary}/>
                    </div>
                    <div className="countries_extra_info grid-item">
                        <h3 className="border-countries-title fw-800 fs-500">Border Countries</h3>
                        <div className="border-countries flex-item">
                          {data.borders?data.borders.map(country=> <span key={country} className='border-country'>{country}</span>): <span className='border-country'>No Borders available</span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}



