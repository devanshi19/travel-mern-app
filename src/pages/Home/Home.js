import { heroBanner } from "../../Utils/images";
import "./Home.css"

const Home = () => {
    return (
        <div className="home-page-wrap">
            <div className="hero-banner-wrap">
                <div className="hero-banner-image">
                    <img src={heroBanner.src} alt={heroBanner.name} />
                </div>
                <div className="hero-baner-text">
                    <h1>Discover Your Next Adventure</h1>
                    <h3>Experience the world's most breathtaking destinations with <span>Travel</span>.</h3>
                    <p>From serene beaches to bustling metropolises, we curate travel experiences tailored just for you. Embark on a journey of discovery, wonder, and unparalleled service.</p>
                </div>
            </div>

        </div>
    )
}

export default Home;