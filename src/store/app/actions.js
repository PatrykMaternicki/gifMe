import { default as TYPES } from './types';

const setAppState = (item) => ({
  type: TYPES.APP_SET_STATE, item
})

export default {
  setAppState
}