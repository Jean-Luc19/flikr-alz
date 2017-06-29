import React, { Component } from 'react';
import '../App.css';

import SearchBar from './search-bar';
import PhotoGallery from './photo-gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PhotoGallery />
      </div>
    );
  }
}

export default App;
