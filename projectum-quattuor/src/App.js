import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Prosjekt 4
          </p>
        </header>

        {/*All divs below should be comprised of their own components*/}

        <div class="content">


          {/*Search bar*/}
          <div class="search_wrapper">
            <h1>Search</h1>
            <form>
              <label>
                <input type="text" class="search_bar" />
              </label>
            </form>
          </div>

          {/*Result set*/}
          <div class="result_wrapper">
            <h1>Results</h1>
            <div class="result_set">
              <ul class="result_list"> {/*The objects below should be expandable link/button components that show the other properties of the returned JSON*/}
                <li>Object 1</li>
                <li>Object 2</li>
                <li>Object 3</li>
                <li>Object 4</li>
                <li>Object 5</li>
                <li>Object 6</li>
              </ul>
            </div>
          </div>
        
        </div>
      </div>
    );
  }
}

export default App;
