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
          <form>
            <label>
              <input type="text" class="search_bar" />
            </label>
          </form>

        
        </div>
      </div>
    );
  }
}

export default App;
