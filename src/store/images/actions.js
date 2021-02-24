import { default as TYPES } from './types';

const Actions = {
  getImagesBy: (item) => ({
    type: TYPES.IMAGES_GET_BY, item
  })
}

export default Actions