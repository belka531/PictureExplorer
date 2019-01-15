import { PICTURES_FETCHED } from '../actions/pictures'

const initialState = [];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PICTURES_FETCHED:
      return action.payload 
    default:
      return state;
  }
}

export default reducer;