import { ImagesActions } from '../images/index.js'
import { AppActions } from '../app/index.js'
import Client from '../../helpers/client'

export const getImagesBy = (value) =>
async (dispatch) => {
  dispatch(AppActions.setAppState('SEARCHED'))
  const response = await Client.getBy(value)
  const json = await response.json()
  const data = {
    giphy: json.giphy.data.data, 
    pixabay: json.pixabay.data.hits
  }
  if(data.giphy.length === 0 || data.pixabay.length === 0) {
    dispatch(AppActions.setAppState('NOT_FOUND'))
    return
  }

  dispatch(AppActions.setAppState('LOADED'))
  dispatch(ImagesActions.getImagesBy(data))
} 
