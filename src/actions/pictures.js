import * as request from 'superagent'
import { token } from '../constants'

export const PICTURES_FETCHED = 'PICTURES_FETCHED'
export const PICTURES_SEARCH = 'PICTURES_SWEARCH'

export function fetchedPictures(pictures) {
  return {
    type: PICTURES_FETCHED,
    payload: pictures,
  }
}

export function getPictures() {
  return function (dispatch) {
    request(`https://api.unsplash.com/photos/?${token}`)
      .then(response => {
        dispatch(fetchedPictures(response.body))
      })
  }
}

export function searchPictures(query) {
  return function (dispatch) {
    request(`https://api.unsplash.com/search/photos?query=${query}&${token}`)
    .then (response => {
      dispatch(fetchedPictures(response.body.results))
    })
  }
}