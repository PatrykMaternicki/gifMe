import { combineReducers } from 'redux';
import ImagesReducer from './images';

const createReducer = () => combineReducers({
  images: ImagesReducer,
})

export default createReducer;