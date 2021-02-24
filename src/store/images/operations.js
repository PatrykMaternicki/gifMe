import { ImagesActions } from '../images/index.js'
import Client from '../../helpers/client'

export const getImagesBy = (value) =>
async (dispatch) => {
  const response = await Client.getBy(value)
  const json = await response.json()
  dispatch(ImagesActions.getImagesBy({giphy: json.giphy.data.data, pixabay: json.pixabay.data.hits}))
} 
