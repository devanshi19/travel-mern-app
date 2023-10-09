import "./Experience.css"

const Experience = () => {
    return (
        <div className="experience-wrap">
            <div className="exp-heading">
                <h2>Our Journey Through Time</h2>
                <hr />
            </div>
            <div className="exp-detail-wrap">
                <div className="exp-text">
                    <p>With remarkable time  in the travel industry, we have curated journeys for over a million satisfied travelers, making memories that last a lifetime.For the past decade, we've been committed to eco-friendly travels, supporting local communities, and ensuring minimal environmental impact.</p>
                </div>
                <div className="achievement">
                    <div className="badge">
                        <span>12K+ sucessfull trip</span>
                    </div>
                    <div className="badge">
                        <span>2K+ regular client</span>
                    </div>
                    <div className="badge">
                        <span>10+ years experience</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;