import * as React from 'react'
import { Link } from 'react-router-dom'
import '../styles/PicturesList.css'

export default function PicturesList(props) {
  console.log('props.pictures', props.pictures)
  return (
  <div>
    <div className='searchBar'>
    <input type='text' className='searchPic' onChange={props.onChange} name='search' placeholder='Search picture'/>
    </div>
    <div className='main'>
    <ul className='piclist'>
      { props.pictures.map(picture =>
        <li key={picture.id}>
          <Link to={`/pictures/${picture.id}`}><img src ={ picture.urls.small } alt='kartinka' /></Link>
        </li>
      ) }
    </ul>
    </div>
  </div>)
}