import * as request from 'superagent'
export const PICTURE_FETCHED = 'PICTURE_FETCHED'

export function fetchedPicture(picture) {
  return {
    type: PICTURE_FETCHED,
    payload: picture,
  }
}

export function getPicture(pictureId) {
  return function (dispatch) {
    request(`https://api.unsplash.com/photos/${pictureId}?client_id=0d54d7bf8f81c9ee80a75d9e1263fbb6b8267fad9d908e597b9f7c4f6bcdee23`)
      .then(response => {
        dispatch(fetchedPicture(response.body))
      })
  }
}