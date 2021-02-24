import { connect } from 'react-redux';
import Item from '../components/Item'

const ListingContainer = ({giphy, pixabay}) => (
  <div>
    {giphy.map((item, index) => <Item key={index} src={item.images.downsized.url} />)}
    {pixabay.map((item, index) => <Item key={index} src={item.webformatURL} /> )}
  </div>
)

const mapStateToProps = (state) => ({
  giphy: state.images.giphy,
  pixabay: state.images.pixabay
})

export default connect(mapStateToProps, null)(ListingContainer)