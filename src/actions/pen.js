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

export const addPen = ({ title, content, time, author, category }) => ({
    type: ADD_PEN,
    data: {
        title,
        content,
        time,
        author,
        category,
        vote: 0,
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
