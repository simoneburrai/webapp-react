import StarRating from "./StarRating";
import { useState } from "react";
import { useMovies } from "../contexts/MovieContext";

const ReviewCard = ({ reviews }) => {
    const { url } = useMovies();

    const [formData, setFormData] = useState({
        "name": "",
        "vote": undefined,
        "text": ""
    })

    const setFormValues = (e) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
        console.log(formData);
    }

    // const sendReview = (e) => {
    //     axios.post(url)
    //         .then()
    //     e.preventDefault();
    // }


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
        <form className="reviews-form">
            <input type="text"
                name="review-name"
                value={formData.name}
                onChange={setFormValues} />
            <input type="text"
                placeholder="Inserisci la tua recensione qui"
                value={formData.text}
                name="review-text"
                onChange={setFormValues} />
            <input
                type="number"
                name="review-vote"
                value={formData.vote}
                onChange={setFormValues} />
            <button>SEND</button>
        </form>
    </div>
}

export default ReviewCard;