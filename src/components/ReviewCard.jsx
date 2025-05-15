import StarRating from "./StarRating";
import { useState } from "react";
import { useMovies } from "../contexts/MovieContext";
import axios from "axios";

const ReviewCard = ({ reviews, id }) => {
    const { url } = useMovies();

    const [formData, setFormData] = useState({
        "name": "",
        "vote": 1,
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

    const sendReview = (e) => {
         e.preventDefault();
        axios.post(`${url}${id}/reviews`, formData)
            .then(response => console.log(response))
            .catch(error=> console.log(error))
       
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
                name="name"
                value={formData.name}
                onChange={setFormValues} />
            <input type="text"
                placeholder="Inserisci la tua recensione qui"
                value={formData.text}
                name="text"
                onChange={setFormValues} />
            <input
                type="number"
                name="vote"
                value={formData.vote}
                onChange={setFormValues} />
            <button>SEND</button>
        </form>
    </div>
}

export default ReviewCard;