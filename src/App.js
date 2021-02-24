import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import ListingContainer from './containers/Listing';
import SearchContainer from './containers/Search';


const App = () => (
  <React.Fragment>
    <header>
      G!f.Me
    </header>
    <main>
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
