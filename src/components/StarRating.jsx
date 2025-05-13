const StarRating = ({ vote }) => {

    const maxValue = 5
    const starVotes = [...Array(maxValue)]


    return <div className="stars-container">
        {starVotes.map((_, index) => {
            if (index < vote) {
                return <i key={index} className="fa-solid fa-star"></i>
            } else {
                return <i key={index} className="fa-regular fa-star"></i>
            }
        })
        }
    </div>
}


export default StarRating;