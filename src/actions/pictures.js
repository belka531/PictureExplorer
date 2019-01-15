import * as request from 'superagent'

export const PICTURES_FETCHED = 'PICTURES_FETCHED'

export function fetchedPictures(pictures) {
  return {
    type: PICTURES_FETCHED,
    payload: pictures,
  }
}

export function getPictures() {
  return function (dispatch) {
    request('https://api.unsplash.com/photos/?client_id=0d54d7bf8f81c9ee80a75d9e1263fbb6b8267fad9d908e597b9f7c4f6bcdee23')
      .then(response => {
        dispatch(fetchedPictures(response.body))
      })
  }
}