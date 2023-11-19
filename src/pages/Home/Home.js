import { heroimg4 } from "../../Utils/images";
import "./Home.css";
import SearchBox from "../../components/SearchBox/SearchBox";
import Services from "../../components/Services/Services";
import Experience from "../../components/Experience/Experience";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import FeatureTourParent from "../../components/FeaturedTour/FeatureTourParent";

const Home = () => {
    return (
        <div className="home-page-wrap">
            <div className="hero-banner-wrap">
                <div className="hero-baner-text">
                    <h1>Discover Your Next Adventure</h1>
                    <h3>Experience the world's most breathtaking destinations with <span className="highlight">Travel</span>.</h3>
                    <p>From serene beaches to bustling metropolises, we curate travel experiences tailored just for you. Embark on a journey of discovery, wonder, and unparalleled service.</p>

                </div>
                <div className="hero-banner-image">
                    <img src={heroimg4.src} alt={heroimg4.name} className="img-3" />
                </div>
            </div>
            <div className="container">
                {/** Search Box Part*/}
                <SearchBox />

                {/** Servies Part */}
                <Services />

                {/** Featured Tour */}
                <FeatureTourParent />

                {/**Experience */}
                <Experience />

                {/* Image Gallery*/}
                <ImageGallery />
            </div>
        </div>
    )
}

export default Home;