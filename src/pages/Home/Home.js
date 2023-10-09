import { heroimg1, heroimg2, heroimg3, tourimg1, tourimg2, tourimg3, tourimg4, tourimg5 } from "../../Utils/images";
import "./Home.css";
import SearchBox from "../../components/SearchBox/SearchBox";
import Services from "../../components/Services/Services";
import FeatureTours from "../../components/FeaturedTour/FeatureTours";
import Experience from "../../components/Experience/Experience";
import ImageGallery from "../../components/ImageGallery/ImageGallery"

const Home = () => {
    const featureTourData = [
        {
            img: tourimg1,
            country: "Spain"
        },
        {
            img: tourimg2,
            country: "Bali"
        },
        {
            img: tourimg3,
            country: "Iceland"
        },
        {
            img: tourimg4,
            country: "Canada"
        },
        {
            img: tourimg5,
            country: "Paris"
        }
    ]
    return (
        <div className="home-page-wrap">
            <div className="container">

                <div className="hero-banner-wrap d-flex">
                    <div className="hero-baner-text">
                        <h1>Discover Your Next Adventure</h1>
                        <h3>Experience the world's most breathtaking destinations with <span className="highlight">Travel</span>.</h3>
                        <p>From serene beaches to bustling metropolises, we curate travel experiences tailored just for you. Embark on a journey of discovery, wonder, and unparalleled service.</p>

                    </div>
                    <div className="hero-banner-image">
                        <div className="img-wrap d-flex">
                            <img src={heroimg1.src} alt={heroimg1.name} className="img-1" />
                            <img src={heroimg2.src} alt={heroimg2.name} className="img-2" />
                            <img src={heroimg3.src} alt={heroimg3.name} className="img-3" />
                        </div>
                    </div>

                </div>
                {/** Search Box Part*/}
                <SearchBox />

                {/** Servies Part */}
                <Services />

                {/** Featured Tour */}
                <div className="feature-tour-wrap">
                    <div className="tour-heading">
                        <hr />
                        <h2>Spotlight Adventures: Featured Tours of 2023</h2>
                    </div>
                    <div className="tour-data-wrap">
                        {featureTourData.map((item) => {
                            return < FeatureTours tourData={item} />
                        })}
                    </div>

                </div>

                {/**Experience */}
                <Experience />

                {/* Image Gallery*/}
                <ImageGallery />
            </div>
        </div>
    )
}

export default Home;