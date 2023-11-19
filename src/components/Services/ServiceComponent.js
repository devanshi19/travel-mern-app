
const ServicesComponent = ({ service }) => {
    return (
        <div className="service-card">
            <div className="card-img">
                {service.icon}
                {/* <TiWeatherPartlySunny className="card-icon" /> */}
            </div>
            <div className="card-text">
                <h4>{service.title}</h4>
                <p>{service.text}</p>
            </div>
        </div>
    )
}
export default ServicesComponent;