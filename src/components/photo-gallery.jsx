import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import { fetchPhotos } from '../actions';
import GalleryItem from './gallery-item';

class PhotoGallery extends Component {

  componentDidMount() {
    if (this.props.photos.length < 1) {
      this.props.fetchPhotos('kelpies')
    }
  }

  renderGallery(photos) {
    return photos.map(photo => {
      return (
        <CSSTransitionGroup
          transitionName="flip"
          transitionAppear={true}
          transitionAppearTimeout={700}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          <GalleryItem
            key={photo.link}
            media={photo.media.m}
            title={photo.title}
            tags={photo.tags}
          />
          </CSSTransitionGroup>

        )
      })
  }


  render() {
    const photos = this.props.photos.length > 1 ? this.renderGallery(this.props.photos) : '...loading'
    return (
      <div className="gallery">
        {photos}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  photos: state.photos
})

export default connect (mapStateToProps, { fetchPhotos })(PhotoGallery)
