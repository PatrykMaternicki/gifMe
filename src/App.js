import React from 'react';
import './styles/index.scss';
import 'typeface-pacifico';
import { connect } from 'react-redux';
import ListingContainer from './containers/Listing';
import SearchContainer from './containers/Search';
import ComponentHeader from './components/Header';


const App = ({className='appLayout'}) => (
  <React.Fragment>
    <ComponentHeader />
    <main className={`${className}__main`}>
      <SearchContainer />
      <ListingContainer />
    </main>
  </React.Fragment>
)

const mapStateToProps = (state) => ({
  pixabay: state.images.pixabay,
  giphy: state.images.giphy
})

export default connect(mapStateToProps, null)(App)
