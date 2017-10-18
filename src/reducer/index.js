import { combineReducers } from 'redux'

const categories = [
      {
        name: 'react',
        path: 'react'
      },
      {
        name: 'redux',
        path: 'redux'
      },
      {
        name: 'udacity',
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

const modal = (state = false, action) => {
    switch (action.type) {
        case 'MODAL_TOGGLE':
            return action.bool
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
                pens: state.pens.concat(action.data)
            }
        case 'EDIT_PEN':
            return {
                ...state,
                pens: state.pens.map((pen)=>{
                    if(pen.id === action.id) return action.data
                    return pen
                })
            }
        case 'DELETE_PEN':
            return {
                ...state,
                pens: state.pens.filter(pen => pen.id !== action.data)
            }
       case 'FETCH_PEN':
            return {
                ...state,
                currentPen: action.data
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
                  if(comment.id === action.id) return action.id
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
      default:
          return state
    }

}

export default combineReducers({
  modal,
  category,
  pen,
  comment,
})
