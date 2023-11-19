import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi"
import "./Footer.css";
import { Link } from 'react-scroll';
import NewsLetter from "../NewsLetter/NewsLetter"

const Footer = () => {
    const navLinks = [
        {
            name: "Gallery",
            link: "imageGallery"
        },
        {
            name: "Services",
            link: "serviceSection"
        },
        {
            name: "Feature Tours",
            link: "featureSection"
        },
    ]

    return (
        <div className="footer">
            {/** NewsLetter */}
            <NewsLetter />
            <div className="footer-wrap container">
                <div className="footer-left">
                    <div className="logo-wrap">
                        <h1>Travel</h1>
                    </div>
                    <div className="social-mdeia-wrap">
                        <ul>
                            <li><a href="#"><AiOutlineInstagram /></a></li>
                            <li><a href="#"><BiLogoFacebook /></a></li>
                            <li><a href="#"><AiOutlineYoutube /></a></li>
                            <li><a href="#"><BsPinterest /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-middle">
                    <h5>Quick links</h5>
                    <ul>
                        {navLinks.map((linkData, i) => {
                            return <li key={i}> <Link
                                activeClass="active"
                                to={linkData.link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >{linkData.name}</Link>
                            </li >
                        })}
                    </ul>
                </div>
                <div className="footer-right">
                    <h5>GET IN TOUCH</h5>
                    <div className="address">
                        <h6>Address</h6>
                        <p>56th Street,East,NewYork</p>
                    </div>
                    <div className="phone">
                        <h6>Support Phone</h6>
                        <p>216-652-235</p>
                    </div>
                    <div>
                        <h6>Email:travel@gmail.com</h6>
                        <p>Resposne time usually 4 hours</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;