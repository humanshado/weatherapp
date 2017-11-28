import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import WeatherList from './containers/WeatherList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <h3 id="main-header">Check the Weather in your Cities of Interest?</h3><br />
            <SearchBar />
          </div>
        </div><br /><br />
        <div className="row">
          <div className="col-md-12">
            <WeatherList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
