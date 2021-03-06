const CommentReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return Object.assign({}, state, {text: action.text});
        default:
            return state;
    }
}

export default CommentReducer;
