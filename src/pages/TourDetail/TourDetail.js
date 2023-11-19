import { BASE_URL } from "../../Utils/Config";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import "./TourDetail.css";
import { heroimg1 } from "../../Utils/images";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineNotListedLocation } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { MdOutlineShareLocation } from "react-icons/md"
const TourDetail = () => {
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const [singleTourData, setSingleTourData] = useState(null);
    const tourid = location.state;
    const fetchSingle = async () => {
        const responseData = await fetch(`${BASE_URL}/tours/${tourid}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${user.accessToken}`
            },
        });
        if (responseData.status === 200) {
            const data = await responseData?.json();
            setSingleTourData(data)
        }
    }
    useEffect(() => {
        fetchSingle()
    }, [])

    //Handle Button click functionality of book tour
    const HandleBookButton = () => {
        console.log("travel book click")
    }
    return (
        <div className="tour-detail-wrap container">
            <div className="tour-detail-top">
                <div className="tour-image">
                    <img src={heroimg1.src} alt={heroimg1.name} />
                </div>
                <div className="tour-right">
                    <div className="price-wrap">
                        <div className="price">
                            <h6>$99</h6><span>/person</span>
                        </div>
                        <div className="rating icon-wrap">
                            <AiFillStar className="icon" /><span>(4.5)</span>
                        </div>
                    </div>
                    <div className="info-wrap">
                        <h5>Information</h5>
                        <div className="personal-info">
                            <input className="fullname" name="fullname" id="fullname" placeholder="Fullname" />
                            <input className="phone" name="phone" id="phone" placeholder="Phone" />
                            <input className="date" name="date" id="date" placeholder="Date" />
                        </div>
                    </div>
                    <div className="total-price-wrap">
                        <ul>
                            <li>
                                <span>$99/person</span>
                                <span>$99</span>
                            </li>
                            <li>
                                <span>Service Charge</span>
                                <span>$10</span>
                            </li>
                            <li>
                                <span>Total</span>
                                <span>$109</span>
                            </li>
                        </ul>
                    </div>
                    <div className="book-btn-wrap">
                        <button className="btn secondary-btn" onClick={HandleBookButton}>Book Now</button>
                    </div>
                </div>
            </div>
            <div className="tour-detail-bottom">
                <div className="description-wrap">
                    <div className="top">
                        <h5>Santorini</h5>
                        <div className="rating-location">
                            <div className="icon-wrap">
                                <AiFillStar className="icon" />
                                <span>(4.5)</span>
                            </div>
                            <div className="location icon-wrap">
                                <MdOutlineShareLocation className="icon" />
                                <span>somewhere in Greece</span>
                            </div>
                        </div>
                    </div>
                    <div className="middle">
                        <ul >
                            <li className="icon-wrap">
                                <span><HiOutlineLocationMarker className="icon" /></span>
                                <span>Geerce</span>
                            </li>
                            <li className="icon-wrap">
                                <span><RiMoneyDollarCircleLine className="icon" /></span>
                                <span>$99/Person</span>
                            </li>
                            <li className="icon-wrap">
                                <span><MdOutlineNotListedLocation className="icon" /></span>
                                <span>300 km</span>
                            </li>
                            <li className="icon-wrap">
                                <span><GoPeople className="icon" /></span>
                                <span>20 Person</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom">
                        <h5>Description</h5>
                        <p>
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourDetail;