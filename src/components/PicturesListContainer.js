import * as React from 'react'
import PicturesList from './PicturesList'
import { connect } from 'react-redux'
import {getPictures} from '../actions/pictures'

class PicturesListContainer extends React.Component {
  state = {}

  componentDidMount() {
    this.props.getPictures()
  }
  render() {
    if (!this.props.pictures) return 'Loading...'
    return <PicturesList pictures={this.props.pictures}/>
  }
}

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures
  }
}

export default connect(mapStateToProps, {getPictures})(PicturesListContainer)