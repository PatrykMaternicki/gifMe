import React from 'react';
import './styles/index.scss';
import 'typeface-pacifico';
import { connect } from 'react-redux';
import ListingContainer from './containers/Listing';
import SearchContainer from './containers/Search';
import ComponentHeader from './components/Header';
import AppStateComponent from './components/AppState';

const App = ({ className = 'appLayout', appState }) => (
  <>
    <ComponentHeader />
    <main className={`${className}__main`}>
      <SearchContainer />
      {appState !== 'LOADED' && <AppStateComponent appState={appState} />}
      {appState === 'LOADED' && <ListingContainer />}
    </main>
  </>
);

const mapStateToProps = (state) => ({
  appState: state.app.state,
});

export default connect(mapStateToProps, null)(App);
