export const FETCH_COMMENT = "FETCH_COMMENT"

export const getComments = ( comments ) => ({
    type: FETCH_COMMENT,
    data: comments.map( comment => {
        return {
            id: comment.id,
            parentId: comment.parentId,
            time: comment.timestamp,
            content: comment.body,
            author: comment.author,
            vote: comment.voteScore,
            deleted: comment.deleted,
            parentDeleted: comment.parentDeleted,
        }
    })
})


export const ADD_COMMENT = "ADD_COMMENT"

export const addComment = ({ pen, content, author, time, id }) => ({
    type: ADD_COMMENT,
    data: {
      content,
      author,
      time,
    },
    pen,
    id,
})

export const EDIT_COMMENT = "EDIT_COMMENT"

export const editComment = ({ id, content, author, time }) => ({
    type: EDIT_COMMENT,
    data: {
      content,
      author,
      time,
    },
    id,
})

export const DELETE_COMMENT = "DELETE_COMMENT"

export const deleteComment = ( comment ) => ({
    type: DELETE_COMMENT,
    id: comment.id,
})

export const VOTE_COMMENT = "VOTE_COMMENT"

export const voteComment = ({ id, score }) => ({
    type: voteComment,
    id,
    score,
})
