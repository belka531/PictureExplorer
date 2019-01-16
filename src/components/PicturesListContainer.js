import * as React from 'react'
import PicturesList from './PicturesList'
import { connect } from 'react-redux'
import { getPictures, searchPictures } from '../actions/pictures'

class PicturesListContainer extends React.Component {
  componentDidMount() {
    this.props.getPictures()
  }
  
  onChange = (event) => {
    if (event.target.value === '') {
      this.props.getPictures()
    } else {
      this.props.searchPictures(event.target.value.toLowerCase())
    }

  }
  render() {
    if (!this.props.pictures) return 'Loading...'
    return <PicturesList pictures={this.props.pictures} onChange={this.onChange}/>
  }
}

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures
  }
}

export default connect(mapStateToProps, { getPictures, searchPictures })(PicturesListContainer)