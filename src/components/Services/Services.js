import "./services.css";
import ServicesComponent from "./ServiceComponent";

const Services = () => {
    return (
        <div className="services-wrap">
            <div className="service-header">
                {/* <span className="dot"></span> */}
                <h2>Discover Our Feature</h2>
                {/* <span className="dot"></span> */}
            </div>
            <div className="service-card-wrap">
                <ServicesComponent />
                <ServicesComponent />
                <ServicesComponent />
            </div>
        </div>
    )
}

export default Services;