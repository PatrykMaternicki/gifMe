import { default as TYPES } from './types';

const getImagesBy = (item) => ({
  type: TYPES.IMAGES_GET_BY, item
})

export default {
  getImagesBy
}