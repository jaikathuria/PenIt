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
        author: pen.author
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
      author: pen.author
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
