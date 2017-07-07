const RatingAction = (newRating) => {
    return {
        type: 'PROVIDE_RATING',
        rating: newRating
    }
}

export default RatingAction;