import { PICTURES_FETCHED } from '../actions/pictures'

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case PICTURES_FETCHED:
      return action.payload 
    default:
      return state;
  }
}

export default reducer;