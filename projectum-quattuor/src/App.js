import React, { Component } from 'react';
import './App.css';
import Searchbutton from '../src/components/Searchbutton';
import Checkbox from './components/Checkbox';


import ResultSet from './components/Results/ResultSet';
import ExampleContainer from './components/example/ExampleContainer';

class App extends Component {



  render() {
    
    return (
      <>
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
            <Searchbutton />

            {/*Searches are fetched from the database which records the users activity. The objects will only be loaded progressively as the user scrolls.*/}
            <div className="saved_history">
              <ul className="history_list">
                <li>test</li>
                <li>test2</li>
                <li>test2</li>
                <li>test</li>
                <li>test2</li>
                <li>test</li>
                <li>test2</li>
                <li>test2</li>
                <li>test</li>
                <li>test2</li>
                <li>test</li>
                <li>test2</li>
              </ul>
            </div>

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

                <form>
                    {/*For filtering types of return objects*/}
                    <label><input defaultChecked="true" type="checkbox" className="filter_box" name="films" value="films" />Show films</label>
                    <label><input defaultChecked="true" type="checkbox" className="filter_box" name="people" value="people" />Show people</label>
                    <label><input defaultChecked="true" type="checkbox" className="filter_box" name="species" value="species" />Show species</label>
                    <label><input defaultChecked="true" type="checkbox" className="filter_box" name="starships" value="starships" />Show starships</label>
                    <label><input defaultChecked="true" type="checkbox" className="filter_box" name="vehicles" value="vehicles" />Show vehicles</label>
                    <label><input defaultChecked="true" type="checkbox" className="filter_box" name="planet" value="planet" />Show planet</label>
                </form>
              </div>

              <ResultSet/>
            </div>
          
          </div>
        </div>
      </>
    );
  }
}

export default App;
