import ImagesActions from './actions';
import { AppActions } from '../app';
import Client from '../../helpers/client';

/* eslint-disable import/prefer-default-export */
export const getImagesBy = (value) => async (dispatch) => {
  dispatch(AppActions.setAppState('SEARCHED'));
  const response = await Client.getBy(value);

  if (response.status === 404 || response.status === 500) {
    dispatch(AppActions.setAppState('ERROR'));
    return;
  }

  const json = await response.json();
  const data = {
    giphy: json.giphy.data.data,
    pixabay: json.pixabay.data.hits,
  };
  if (data.giphy.length === 0 || data.pixabay.length === 0) {
    dispatch(AppActions.setAppState('NOT_FOUND'));
    return;
  }

  dispatch(AppActions.setAppState('LOADED'));
  dispatch(ImagesActions.getImagesBy(data));
};
