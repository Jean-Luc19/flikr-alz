import React from 'react';


const GalleryItem = props => {
  const { media, title, tags } = props;
  return (
    <div className="image">
      <h3>{title}</h3>
      <img className="flickr-image" src={media} alt={title}/>
      <p>Tags: {tags}</p>

    </div>
  )
}

export default GalleryItem;
