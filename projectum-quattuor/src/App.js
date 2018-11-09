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
          <header className="App-header">
            <p>
              Prosjekt 4
            </p>
          </header>

          {/*All divs below should be comprised of their own components*/}

          <div className="content">

            <ExampleContainer />

            {/*Search bar*/}
            <SearchbuttonContainer />

            {/*Searches are fetched from the database which records the users activity. The objects will only be loaded progressively as the user scrolls.*/}


            {/*Result set*/}
            <div className="result_wrapper">
              <h1>Results</h1>

              <div className="sort_filters"> {/*These are options that the user can make in order to sort and filter the results. The idea is to make it so that changing the value will automatically perform a new request for the result set.*/}
                <form>
                    {/*For sorting the returned objects based on user choice*/}
                    <select className="sorting">
                      <option value="lexicographical">Alphabetically</option>
                      <option value="by_added_date">By added date</option>
                      <option value="by_added_date_rev">By added date reversed</option>
                    </select>
                </form>
              </div>

              <ResultSetContainer/>
            </div>
          
          </div>
        </div>
    );
  }
}

export default App;
