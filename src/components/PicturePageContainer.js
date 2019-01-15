import * as React from 'react'
import PicturePage from './PicturePage'
import { connect } from 'react-redux'
import {getPicture} from '../actions/picture'


class PicturePageContainer extends React.Component {
  state = {}

  componentDidMount() {
    this.props.getPicture(this.props.match.params.id)
  }

  render() {
    if (!this.props.picture) return 'Loading...'
    return <PicturePage picture={this.props.picture} />
  }
}

const mapStateToProps = (state) => {
  return {
    picture: state.picture
  }
}

export default connect(mapStateToProps, {getPicture})(PicturePageContainer)