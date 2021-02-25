import TYPES from './types';

const Actions = {
  getImagesBy: (item) => ({
    type: TYPES.IMAGES_GET_BY, item,
  }),

  clearImages: () => ({
    type: TYPES.IMAGES_CLEAR
  })
};

export default Actions;
