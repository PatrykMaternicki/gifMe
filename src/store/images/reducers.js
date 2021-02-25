import TYPES from './types';

const INIT_STATE = {
  giphy: [],
  pixabay: [],
};

const imagesReducers = (state = INIT_STATE, action) => {
  switch (action.type) {
  case TYPES.IMAGES_GET_BY: {
    return {
      ...state, giphy: action.item.giphy, pixabay: action.item.pixabay,
    };
  }
  default:
    return state;
  }
};

export default imagesReducers;
