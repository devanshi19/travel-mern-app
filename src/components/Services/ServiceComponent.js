import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiGuideFill } from "react-icons/ri";
import { BiCustomize } from "react-icons/bi"


const ServicesComponent = () => {
    return (
        <div className="service-card">
            <div className="card-img">
                <TiWeatherPartlySunny className="card-icon" />
            </div>
            <div className="card-text">
                <h4>Calculate Weather</h4>
                <p>we provide accurate and up-to-the-minute weather information right at your fingertips.</p>
            </div>
        </div>
    )
}
export default ServicesComponent;