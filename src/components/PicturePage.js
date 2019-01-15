import * as React from 'react'
import { Link } from 'react-router-dom'

export default function PicturePage(props) {
  console.log("cxxxxx")
  return (
  <div>
    <Link to="/">Go back</Link>
    <div>
      <img alt='kartinka' src={props.picture.urls.raw}></img>
    </div>
  </div>)
}