import "./NewsLetter.css"
const NewsLetter = () => {
    return (
        <div className="newsletter-wrap">
            <h5>Want to explore the world from your inbox ?</h5>
            <div className="newsletter-text">
                <input placeholder="Enter your Email" name="newsletter" id="newsletter" />
                <button className="btn primary-btn">Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter;