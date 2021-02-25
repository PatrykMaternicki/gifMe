import TYPES from './types';

const INIT_STATE = {
  state: 'STARTED',
};

const appReducers = (state = INIT_STATE, action) => {
  switch (action.type) {
  case TYPES.APP_SET_STATE: {
    return {
      ...state, state: action.item,
    };
  }
  default:
    return state;
  }
};

export default appReducers;
