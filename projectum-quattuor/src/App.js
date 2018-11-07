import React, { Component } from 'react';
import './App.css';
import Searchbutton from '../src/components/Searchbutton';
import Checkbox from './components/Checkbox';


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
        <Searchbutton />

          {/*Searches are fetched from the database which records the users activity. The objects will only be loaded progressively as the user scrolls.*/}
          {/*Result set*/}

        
        </div>
      </div>
    );
  }
}

export default App;
