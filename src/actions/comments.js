export const ADD_COMMENT = "ADD_COMMENT"

export const addComment = ({ pen, content, author, time }) => ({
    type: ADD_COMMENT,
    pen,
    content,
    author,
    time,
})

export const EDIT_COMMENT = "EDIT_COMMENT"

export const editComment = ({ id, content, author, time }) => ({
    type: EDIT_COMMENT,
    id,
    content,
    author,
    time,
})

export const DELETE_COMMENT = "DELETE_COMMENT"

export const deleteComment = ({ id }) => ({
    type: DELETE_COMMENT,
    id,
})

export const VOTE_COMMENT = "VOTE_COMMENT"

export const voteComment = ({ id, score }) => ({
    type: voteComment,
    id,
    score,
})
