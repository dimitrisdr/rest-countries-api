import { Link } from "react-router-dom"

export default function PageNotFound() {
    const BASE_PATH = import.meta.env.VITE_BASE_PATH || "/rest-countries-api/";

    return (
        <section className="not-found-section grid-item">
            <div className="error-container">
                <h1 className="error-title fw-800">404</h1>
                <p className="error-text">The requested Page is not found in data.</p>
            </div>
            <Link className='back-btn link flex-item' to ={BASE_PATH}>
            <svg className="map-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                Back 
            </Link>
        </section>
    )
};
