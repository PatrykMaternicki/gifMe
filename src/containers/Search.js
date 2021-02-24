import { connect } from 'react-redux'
import SearchComponent from '../components/Search';
import { getImagesBy } from '../store/images/operations'

const SearchContainer = ({getImagesBy}) => (
  <div>
    <SearchComponent 
      handleSearch={getImagesBy}
    />
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  getImagesBy: (value) => dispatch(getImagesBy(value))
})

export default connect(null, mapDispatchToProps)(SearchContainer)