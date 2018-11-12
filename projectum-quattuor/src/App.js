/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './App.css';
import Checkbox from './components/Search/Checkbox';

import SearchbuttonContainer from './components/Search/SearchbuttonContainer';
import ResultSetContainer from './components/Results/ResultSetContainer';
import ExampleContainer from './components/example/ExampleContainer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="content">

          {/* Search bar */}
          <SearchbuttonContainer />

          {/* Result set */}
          <div className="result_wrapper">
            <h1>Results</h1>
            <ResultSetContainer />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
