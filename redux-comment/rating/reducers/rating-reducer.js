const RatingReducer = (state, action) => {
    switch (action.type) {
        case 'PROVIDE_RATING':
            return Object.assign({}, state, {rating: action.rating});
        default:
            return state;
    }
}

export default RatingReducer;