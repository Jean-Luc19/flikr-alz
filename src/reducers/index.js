import { combineReducers } from 'redux';
import reducer_photos from './reducer_photos'

export default combineReducers({
  photos: reducer_photos
});
