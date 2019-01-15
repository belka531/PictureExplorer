import * as React from 'react'
import { Link } from 'react-router-dom'

export default function PicturesList(props) {
  console.log('props', props)
  return (<div>
    <h1>Pictures Explorer</h1>
    <ul>
      { props.pictures.map(picture =>
        <li key={picture.id}>
          <Link to={`/pictures/${picture.id}`}><img src ={ picture.urls.thumb } alt='kartinka' /></Link>
        </li>
      ) }
    </ul>
  </div>)
}