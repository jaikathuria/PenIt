export const ADD_PEN = "ADD_PEN"

export const addPen = ({ title, content, time, author, category }) => ({
    type: ADD_PEN,
    data: {
        title,
        content,
        time,
        author,
    },
})

export const EDIT_PEN = "EDIT_PEN"

export const editPen = ({ id, title, content, time, author, category }) => ({
    type: EDIT_PEN,
    data: {
        title,
        content,
        time,
        author,
    },
    id,
})

export const DELETE_PEN = "DELETE_PEN"

export const deletePen = ({ id }) => ({
    type: DELETE_PEN,
    id,
})

export const VOTE_POST = "VOTE_POST"

export const votePost = ({ id, score }) => ({
    type: VOTE_POST,
    id,
    score,
})
