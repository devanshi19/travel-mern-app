
const AvarageRating = (reviews, tourId) => {
    if (reviews.length === 0) return 0;
    let count = 0;
    let totalReview = reviews.length;
    reviews.map((review) => {
        count += review.rating;
    })
    const avrageReview = Math.round(count / totalReview);
    return {
        avrageReview,
        totalReview
    };
}

export default AvarageRating;