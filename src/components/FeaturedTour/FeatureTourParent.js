import FetchData from "../../Services/FetchData";
import { BASE_URL } from "../../Utils/Config";
import TourCard from "../FeaturedTour/TourCard.js";
const FeatureTourParent = () => {
    //Fetch Feature Tour Data
    const { responseData } = FetchData(`${BASE_URL}/tours/search/featuredTour`);
    const tourData = responseData?.data;
    return (
        <div className="feature-tour-wrap" id="featureSection">
            <div className="tour-heading">
                <hr />
                <h2>Spotlight Adventures: Featured Tours of 2023</h2>
            </div>
            <div className="tour-data-wrap">
                {tourData?.map((item) => {
                    return < TourCard tourData={item} />
                })}
            </div>
        </div>
    )

}

export default FeatureTourParent;