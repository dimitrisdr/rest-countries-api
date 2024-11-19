import { Link } from "react-router-dom"

export default function PageNotFound() {
    return (
        <section className="not-found-section grid-item">
            <div className="error-container">
                <h1 className="error-title fw-800">404</h1>
                <p className="error-text">The requested Page is not found in data.</p>
            </div>
            <Link className='back-btn link flex-item' to ='/'>
                <i className="fa-solid fa-arrow-left"></i>
                Back 
            </Link>
        </section>
    )
};
