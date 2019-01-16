import * as request from 'superagent'
import { token } from '../constants'

export const PICTURE_FETCHED = 'PICTURE_FETCHED'

export function fetchedPicture(picture) {
  return {
    type: PICTURE_FETCHED,
    payload: picture,
  }
}

export function getPicture(pictureId) {
  return function (dispatch) {
    request(`https://api.unsplash.com/photos/${pictureId}?${token}`)
      .then(response => {
        dispatch(fetchedPicture(response.body))
      })
  }
}