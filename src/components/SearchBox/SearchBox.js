import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiPathDistance } from "react-icons/gi";
import { BsPeople, BsSearchHeart } from "react-icons/bs";
import "./SearchBox.css"


const SearchBox = () => {
    const [locationValue, setLocationValue] = useState("");
    const [distanceValue, setDistanceValue] = useState(0);
    const [peopleCout, setPeopleCount] = useState(0);
    const HandleDistance = (e) => {
        setDistanceValue(e.target.value)
    }
    const HandlePeopleCpount = (e) => {
        setPeopleCount(e.target.value)
    }
    const HandleSearch = () => {
        if (locationValue === "" || distanceValue === 0 || peopleCout === 0) {
            console.log("error")
        }
    }
    return (
        <div className="search-box-wrap">
            <div className="search-parent">
                <div className="location-search-wrap search-child">
                    <HiOutlineLocationMarker className="icon" />
                    <div className="text">
                        <label>Location</label>
                        <input type="text" name="location" placeholder="Where are you going ?" value=
                            {locationValue} onChange={(e) => setLocationValue(e.target.value)} />
                    </div>
                </div>
                <div className="distance-search-wrap search-child">
                    <GiPathDistance className="icon" />
                    <div className="text">
                        <label>Distance</label>
                        <input type="text" name="distance" placeholder="500" value={distanceValue} onChange={HandleDistance} />
                    </div>
                </div>
                <div className="people-count-search-wrap">
                    <BsPeople className="icon" />
                    <div className="text">
                        <label>Person</label>
                        <input type="text" name="count" placeholder="200" value={peopleCout} onChange={HandlePeopleCpount} />
                    </div>
                </div>
                <div className="search-icon">
                    <button onClick={HandleSearch}><BsSearchHeart className="icon" /></button>
                </div>
            </div>
        </div>

    )

}

export default SearchBox;