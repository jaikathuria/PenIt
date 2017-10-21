export const FETCH_PENS = "FETCH_PENS"

export const fetchPens = ( pens ) => ({
    type: FETCH_PENS,
    data: pens.map(pen => {
      return {
        id: pen.id,
        title: pen.title,
        content: pen.body,
        category: pen.category,
        time: pen.timestamp,
        vote: pen.voteScore,
        author: pen.author,
        deleted: pen.deleted,
      }
    })
})

export const FETCH_PEN = "FETCH_PEN"

export const fetchPen = ( pen ) => ({
  type: FETCH_PEN,
  data: {
      id: pen.id,
      title: pen.title,
      content: pen.body,
      category: pen.category,
      time: pen.timestamp,
      vote: pen.voteScore,
      author: pen.author,
      deleted: pen.deleted,
    }
})


export const ADD_PEN = "ADD_PEN"

export const addPen = ( pen )  => ({
    type: ADD_PEN,
    data: {
        id: pen.id,
        title: pen.title,
        content: pen.body,
        category: pen.category,
        time: pen.timestamp,
        vote: pen.voteScore,
        author: pen.author,
        deleted: pen.deleted,
    }
})


export const EDIT_PEN = "EDIT_PEN"

export const editPen = ( pen ) => ({
    type: EDIT_PEN,
    data: {
        id: pen.id,
        title: pen.title,
        content: pen.body,
        category: pen.category,
        time: pen.timestamp,
        vote: pen.voteScore,
        author: pen.author,
        deleted: pen.deleted,
    }

})

export const DELETE_PEN = "DELETE_PEN"

export const deletePen = ( pen ) => ({
    type: DELETE_PEN,
    id: pen.id,
})

export const VOTE_PEN = "VOTE_PEN"

export const votePen = ( pen ) => ({
    type: VOTE_PEN,
    id: pen.id,
    vote: pen.voteScore,
    data: {
      id: pen.id,
      title: pen.title,
      content: pen.body,
      category: pen.category,
      time: pen.timestamp,
      vote: pen.voteScore,
      author: pen.author,
      deleted: pen.deleted,
    }
})

export const CLEAR_PEN = "CLEAR_PEN"

export const clearPen = () => {
    return {
        type: CLEAR_PEN
    }
}
