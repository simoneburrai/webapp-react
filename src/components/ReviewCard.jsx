import StarRating from "./StarRating";
import { useState } from "react";

const ReviewCard = ({ reviews }) => {
    const [review, setReview] = useState("");
    const sendReview = (e) => {
        e.preventDefault();
    }


    return <div className="movie-reviews">
        <div className="reviews-container">
            {reviews.map(review => {
                return <div key={review.id} className="review">
                    <h4>{review.name}</h4>
                    <StarRating vote={review.vote} />
                    <p>{review.text}</p>
                </div>
            })}
        </div>
        <form className="reviews-form" onSubmit={sendReview}>
            <input type="text"
                placeholder="Inserisci la tua recensione qui"
                value={review}
                onChange={() => setReview(e => e.target.value)} />
            <button>SEND</button>
        </form>
    </div>
}

export default ReviewCard;