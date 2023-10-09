
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import "./FeaturedTour.css"

const FeatureTours = ({ tourData }) => {
    return (
        <div className="tour-card-wrap">
            <div className="tour-card-image">
                <img src={tourData.img.src} alt={tourData.img.name} />
            </div>
            <div className="tour-card-detail">
                <div className="detail-top">
                    <span className="rate-icon"><AiFillStar /><AiFillStar /><AiOutlineStar className="" /><AiOutlineStar /></span>
                    <span className="counrty-name">{tourData.country}</span>
                </div>
                <div className="detail-bottom">
                    <button className="btn-link buy-btn">
                        <span>Learn More</span>
                        <span className="arrow-icon"><BsArrowRightShort /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeatureTours;