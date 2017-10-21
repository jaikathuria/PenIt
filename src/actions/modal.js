export const CLOSE_PEN_MODAL = 'CLOSE_PEN_MODAL'

export const closePenModal = () => {
    return {
        type: CLOSE_PEN_MODAL,
    }
}

export const NEW_PEN_MODAL = 'NEW_PEN_MODAL'

export const newPenModal = () => {
    return {
        type: NEW_PEN_MODAL,
    }
}

export const EDIT_PEN_MODAL = 'EDIT_PEN_MODAL'

export const editPenModal = ( id ) => {
    return {
        type: EDIT_PEN_MODAL,
        id: id
    }
}

export const CLOSE_COMMENT_MODAL = 'CLOSE_COMMENT_MODAL'

export const closeCommentModal = () => {
    return {
        type: CLOSE_COMMENT_MODAL,
    }
}

export const NEW_COMMENT_MODAL = 'NEW_COMMENT_MODAL'

export const newCommentModal = () => {
    return {
        type: NEW_COMMENT_MODAL,
    }
}

export const EDIT_COMMENT_MODAL = 'EDIT_COMMENT_MODAL'

export const editCommentModal = ( id ) => {
    return {
        type: EDIT_COMMENT_MODAL,
        id: id
    }
}
