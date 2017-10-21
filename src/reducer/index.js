import { combineReducers } from 'redux'

const categories = [
      {
        name: 'React',
        path: 'react'
      },
      {
        name: 'Redux',
        path: 'redux'
      },
      {
        name: 'Rdacity',
        path: 'udacity'
      }
]

const category = ( state = { categories }, action ) => {
    switch (action.type) {
      case 'FETCH_CATEGORIES':
          return {
              ...state,
              categories: action.data
          }

      default:
          return state

    }
}

const sortType = (state = { type: "date", order: "asc" }, action) => {
    switch (action.type) {
        case 'SORT_DATE_ASC':
            return {
                ...state,
                type: "date",
                order: "asc",
            }
        case 'SORT_DATE_DESC':
            return {
                ...state,
                type: "date",
                order: "desc",
            }
        case 'SORT_VOTE_ASC':
            return {
                ...state,
                type: "vote",
                order: "asc",
            }
        case 'SORT_VOTE_DESC':
            return {
                ...state,
                type: "vote",
                order: "desc",
            }
        default:
            return state
    }
}
const modalState = {
    penModal: {
        active: false,
        id: null
    },
    commentModal: {
        active: false,
        id: null
    }
}

const modal = (state = modalState, action) => {
    switch (action.type) {
        case 'CLOSE_PEN_MODAL':
            return {
                ...state,
                penModal: {
                    active: false,
                    id: null
                }
            }
        case 'NEW_PEN_MODAL':
            return {
                ...state,
                penModal: {
                    active: true,
                    id: null
                }
            }
        case 'EDIT_PEN_MODAL':
            return {
                ...state,
                penModal: {
                    active: true,
                    id: action.id
                }
            }
        case 'CLOSE_COMMENT_MODAL':
            return {
                ...state,
                commentModal: {
                    active: false,
                    id: null
                }
            }
        case 'NEW_COMMENT_MODAL':
            return {
                ...state,
                commentModal: {
                    active: true,
                    id: null
                }
            }
        case 'EDIT_COMMENT_MODAL':
            return {
                ...state,
                commentModal: {
                    active: true,
                    id: action.id
                }
            }
        default:
            return state
    }
}

const pen = (state = { pens: [], currentPen: {} }, action) => {
    switch (action.type) {
        case 'FETCH_PENS':
            return {
              ...state,
              pens: action.data
            }
        case 'ADD_PEN':
            return {
                ...state,
                pens: state.pens.concat(action.data),
                currentPen: action.data
            }
        case 'EDIT_PEN':
            return {
                ...state,
                pens: state.pens.map((pen)=>{
                  if(pen.id === action.data.id)
                    return action.data
                  return pen
                }),
                currentPen: action.data
            }
        case 'DELETE_PEN':
            return {
                ...state,
                pens: state.pens.map(pen => {
                    if(pen.id === action.id){
                        pen.deleted = true
                        return pen
                    }
                    return pen
                })
            }
        case 'FETCH_PEN':
            return {
                ...state,
                currentPen: {
                    ...action.data,
                    deleted: action.data.deleted === undefined ? true : false,
                }
            }
        case 'VOTE_PEN':
            return {
                ...state,
                currentPen: {
                    ...state.currentPen,
                    vote: action.vote
                },
                pens: state.pens.map(pen => {
                    if(pen.id === action.id){
                        pen.vote = action.vote
                        return pen
                    }
                    return pen
                })
            }
        case 'CLEAR_PEN':
            return {
                ...state,
                currentPen: {}
            }
        default:
            return state
    }
}

const comment = (state = { comments: [] }, action) => {
    switch (action.type) {

      case 'ADD_COMMENT':
          return {
              ...state,
              comments: state.comments.concat(action.data)
          }

      case 'EDIT_COMMENT':
          return {
              ...state,
              comments: state.comments.map((comment)=>{
                  if(comment.id === action.data.id){
                      return action.data
                  }
                  return comment
              })
          }

      case 'DELETE_COMMENT':
          return {
              ...state,
              comments: state.comments.map(comment => {
                  if (comment.id === action.id) {
                      comment.deleted = true
                      return comment
                  }
                  return comment
              })
          }

      case 'FETCH_COMMENT':
          return {
              ...state,
              comments: action.data
          }

      case 'VOTE_COMMENT':
          return {
              ...state,
              comments: state.comments.map(comment => {
                  if(comment.id === action.id) {
                      comment.vote = action.vote
                      return comment
                  }
                  return comment
              })
          }

      default:
          return state
    }

}

export default combineReducers({
  modal,
  sortType,
  category,
  pen,
  comment,
})
