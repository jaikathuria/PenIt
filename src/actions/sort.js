export const SORT_DATE_ASC = "SORT_DATE_ASC"

export const SORT_DATE_DESC = "SORT_DATE_DESC"

export const dateSort = (data) => {
    if (data > 0 ){
      return {
          type: SORT_DATE_ASC
      }
    }
    return {
      type: SORT_DATE_DESC
    }
}

export const SORT_VOTE_ASC = "SORT_VOTE_ASC"

export const SORT_VOTE_DESC = "SORT_VOTE_DESC"

export const voteSort = (data) => {
    if (data > 0 ){
      return {
          type: SORT_VOTE_ASC
      }
    }
    return {
      type: SORT_VOTE_DESC
    }
}
