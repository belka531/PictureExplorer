import * as React from 'react'
import '../styles/PicturePage.css'

export default function PicturePage(props) {
  return (
  <div className='main'>
    <a href='/'>Go back</a>
    <div >
        <img alt='kartinka' src={props.picture.urls.small} className='pic'></img>
    </div>
  </div>)
}