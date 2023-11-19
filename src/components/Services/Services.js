import "./services.css";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiGuideLine } from "react-icons/ri";
import { BiCustomize } from "react-icons/bi";
import ServicesComponent from "./ServiceComponent";

const Services = () => {
    const ServiceData = [
        {
            icon: <TiWeatherPartlySunny className="card-icon" />,
            title: "Calculate Weather",
            text: "we provide accurate and up-to-the-minute weather information right at your fingertips."
        },
        {
            icon: <RiGuideLine className="card-icon" />,
            title: "Best TourGuide",
            text: "we provide accurate and valuable tour guide"
        },
        {
            icon: <BiCustomize className="card-icon" />,
            title: "Tailored Just for You(Customization)",
            text: " Dive deep into personalization and craft a trip that fits your desires, interests, and budget."
        }
    ]
    return (
        <div className="services-wrap" id="serviceSection">
            <div className="service-header">
                {/* <span className="dot"></span> */}
                <h2>Discover Our Feature</h2>
                {/* <span className="dot"></span> */}
            </div>
            <div className="service-card-wrap">
                {ServiceData.map((service, i) => {
                    return <ServicesComponent service={service} />
                })}
                {/* <ServicesComponent />
                <ServicesComponent />
                <ServicesComponent /> */}
            </div>
        </div>
    )
}

export default Services;