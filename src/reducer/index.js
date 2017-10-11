import {
    addPen,
    editPen,
    deletePen
} from './../actions/pen.js'

 export const pen = (state, action) => {
    switch (action.type) {
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
        default:
            return state
    }
}

export const comment = (state, action) => {
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
              comment: state.comments.filter(comment => comment.id !== action.data)
          }
      default:
          return state
    }

}
