import StarRating from "./StarRating";
import { useState } from "react";
import { useMovies } from "../contexts/MovieContext";
import axios from "axios";

const ReviewCard = ({props}) => {
    const { reviews, id, getMovie } = props;
    const defaultFormData = {
        "name": "",
        "vote": null,
        "text": ""
    }
    const { url } = useMovies();

    const [formData, setFormData] = useState(defaultFormData)

    const setFormValues = (e) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const sendReview = (e) => {
         e.preventDefault();
        axios.post(`${url}${id}/reviews`, formData)
            .then(response => console.log(response))
            .catch(error=> console.log(error))

        getMovie();
        setFormData(defaultFormData);
    

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
            <div className="inputs">
              <input id="name"
            type="text"
                name="name"
                value={formData.name}
                onChange={setFormValues} 
                placeholder="Inserisci il tuo nome"
                required/>
                <input id="vote"
                type="number"
                name="vote"
                value={formData.vote}
                onChange={setFormValues}
                placeholder="Inserisci il tuo voto (da 1 a 5)" 
                required
                min="1" 
                max="5"/>
            <input id="text"
            type="text"
                placeholder="Inserisci la tua recensione qui"
                value={formData.text}
                name="text"
                onChange={setFormValues} 
                required/>
            
            </div>
            <button>SEND</button>
        </form>
    </div>
}

export default ReviewCard;