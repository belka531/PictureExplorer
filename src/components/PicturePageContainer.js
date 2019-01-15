import * as React from 'react'
import PicturePage from './PicturePage'
import { connect } from 'react-redux'
import {getPicture} from '../actions/picture'


class PicturePageContainer extends React.Component {
  componentDidMount() {
    this.props.getPicture(this.props.match.params.id)
  }

  render() {
    console.log(">>>", this.props)
    if (!this.props.picture) return 'Loading...'
    return <PicturePage picture={this.props.picture} pictureId={this.props.match.params.id}
    />
  }
}

const mapStateToProps = (state) => {
  console.log("map map", state)
  return {
    picture: state.pictures.picture
  }
}

export default connect(mapStateToProps, {getPicture})(PicturePageContainer)