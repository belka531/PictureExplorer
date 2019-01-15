import { PICTURE_FETCHED } from '../actions/picture'

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case PICTURE_FETCHED:
      return action.payload
    default:
      return state
  }
}

export default reducer