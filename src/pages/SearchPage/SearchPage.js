import CommonPage from "../../components/CommonPage/CommonPage";
import { useLocation } from "react-router-dom";
import TourCard from "../../components/FeaturedTour/TourCard.js";
import "./SearchPage.css"

const SearchPage = () => {
    const location = useLocation();
    const searchData = location.state;
    return (
        <>
            <CommonPage title={"Tour Search List"} />
            <div className="search-list-wrap">
                <div className="container">
                    {searchData.length > 0 ? (searchData?.map((item) => {
                        return <TourCard tourData={item} />
                    })) : (
                        <div>
                            <h2>Oops ! Sorry No Result Found !</h2>
                        </div>
                    )}
                </div>
            </div>
        </>
    )


}
export default SearchPage;