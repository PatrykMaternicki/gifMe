import { combineReducers } from 'redux';
import ImagesReducer from './images';
import AppReducer from './app';

const createReducer = () => combineReducers({
  images: ImagesReducer,
  app: AppReducer
})

export default createReducer;