import React, { Component } from 'react';
import './App.css';
import ExampleContainer from './components/example/ExampleContainer';

class App extends Component {
  render() {
    return (
      <>
        <ExampleContainer />
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </>
    );
  }
}

export default App;
