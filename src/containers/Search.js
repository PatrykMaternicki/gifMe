import { connect } from 'react-redux';
import SearchComponent from '../components/Search';
import { getImagesBy } from '../store/images/operations';

const SearchContainer = ({ fetchImageBy }) => (
  <SearchComponent
    handleSearch={fetchImageBy}
  />
);

const mapDispatchToProps = (dispatch) => ({
  fetchImageBy: (value) => dispatch(getImagesBy(value)),
});

export default connect(null, mapDispatchToProps)(SearchContainer);
