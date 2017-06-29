import fetchJsonp from 'fetch-jsonp'

export const FETCH_PHOTOS = 'FETCH_PHOTOS'

const FLICKR_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';

export const fetchPhotos = (tags) => {
  const request = fetchJsonp(`${FLICKR_URL}&tags=${tags}`, {
    jsonpCallbackFunction: 'jsonFlickrFeed'
  })
  return {
    type: FETCH_PHOTOS,
    payload: request
  }

}
