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

export const addComment = ( comment ) => ({
    type: ADD_COMMENT,
    data: {
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

export const EDIT_COMMENT = "EDIT_COMMENT"

export const editComment = ( comment ) => ({
    type: EDIT_COMMENT,
    data: {
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

export const DELETE_COMMENT = "DELETE_COMMENT"

export const deleteComment = ( comment ) => ({
    type: DELETE_COMMENT,
    id: comment.id,
})

export const VOTE_COMMENT = "VOTE_COMMENT"

export const voteComment = ( comment ) => ({
    type: VOTE_COMMENT,
    id: comment.id,
    vote: comment.voteScore,
})
