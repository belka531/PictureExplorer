import * as React from 'react'
import { Link } from 'react-router-dom'

export default function PicturePage(props) {
  return (
  <div className='main'>
    <Link to="/">Go back</Link>
    <div >
        <img alt='kartinka' src={props.picture.urls.small} className='pic'></img>
    </div>
  </div>)
}