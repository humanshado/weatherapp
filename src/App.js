import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <h3 id="main-header">How is the Weather in your Cities of Interest?</h3>
            <SearchBar />
          </div>
        </div><hr />
      </div>
    );
  }
}

export default App;
