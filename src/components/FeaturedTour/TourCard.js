
import { useNavigate } from "react-router-dom"
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import "./FeaturedTour.css";
import AvarageRating from "../../Utils/AvarageRating";
import { BASE_URL } from "../../Utils/Config";
import FetchData from "../../Services/FetchData";

const TourCard = ({ tourData }) => {
    const navigate = useNavigate();
    const { _id, city, photo, reviews } = tourData;

    //Find Avarage and total Reviews
    const { avrageReview } = AvarageRating(reviews);
    const remaingStar = 5 - avrageReview;
    const { responseData: totalCount } = FetchData(`${BASE_URL}/tours/search/fetchTotalCount`,);

    //Handle Single Tour Data Function 
    const HandleSingleTour = (e) => {
        const tourId = e.target.closest(".buy-btn").dataset.tourId;
        navigate(`/tours/${tourId}`, { state: tourId })
    }

    return (
        <div className="tour-card-wrap" id={_id}>
            <div className="tour-card-image">
                <img src={`/images/${photo}`} alt={"feature-tour-image"} />
            </div>
            <div className="tour-card-detail">
                <div className="detail-top">
                    <div className="review-star-wrap">
                        {[...Array(avrageReview)].map((_, i) => (
                            <span className="rate-icon">
                                <AiFillStar />
                            </span>
                        ))}
                        {[...Array(remaingStar)].map((_, i) => (
                            <span className="rate-icon">
                                <AiOutlineStar />
                            </span>
                        ))}
                    </div>
                    <span className="counrty-name">{city}</span>
                </div>
                <div className="detail-bottom">
                    <button className="btn-link buy-btn" id={_id} data-tour-id={_id} onClick={HandleSingleTour}>
                        <span>Learn More</span>
                        <span className="arrow-icon"><BsArrowRightShort /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TourCard;