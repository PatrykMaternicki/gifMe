import TYPES from './types';

const Actions = {
  setAppState: (item) => ({
    type: TYPES.APP_SET_STATE, item,
  }),
};

export default Actions;
