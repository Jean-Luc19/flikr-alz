import { FETCH_PHOTOS } from '../actions';

export default (state=[], action) => {
  switch(action.type){
    case FETCH_PHOTOS:
      return action.payload
  }
  return state
}
