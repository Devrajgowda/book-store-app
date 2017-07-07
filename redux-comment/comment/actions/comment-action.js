const CommentAction = (newText) => {
    return {
        type: 'CHANGE_TEXT',
        text: newText
    }
}

export default CommentAction;