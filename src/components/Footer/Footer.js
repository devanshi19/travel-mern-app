import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
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
                        <li>Gallery</li>
                        <li>Services</li>
                        <li>Feature Tours</li>
                    </ul>
                </div>
                <div className="footer-right">
                    <div className="newsletter-wrap">
                        <h5>Want to explore the world from your inbox ?</h5>
                        <div className="newsletter-text">
                            <input placeholder="Enter your Email" name="newsletter" id="newsletter" />
                            <button className="btn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;