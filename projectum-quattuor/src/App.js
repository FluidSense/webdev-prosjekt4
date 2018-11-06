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

            <div class="sort_filters"> {/*These are options that the user can make in order to sort and filter the results. The idea is to make it so that changing the value will automatically perform a new request for the result set.*/}
              <form>
                  {/*For sorting the returned objects based on user choice*/}
                  <select class="sorting">
                    <option value="lexicographical">Alphabetically</option>
                    <option value="by_added_date">By added date</option>
                    <option value="by_added_date_rev">By added date reversed</option>
                  </select>
              </form>

              <form>
                  {/*For filtering types of return objects*/}
                  <label><input defaultChecked="true" type="checkbox" class="filter_box" name="films" value="films" />Show films</label>
                  <label><input defaultChecked="true" type="checkbox" class="filter_box" name="people" value="people" />Show people</label>
                  <label><input defaultChecked="true" type="checkbox" class="filter_box" name="species" value="species" />Show species</label>
                  <label><input defaultChecked="true" type="checkbox" class="filter_box" name="starships" value="starships" />Show starships</label>
                  <label><input defaultChecked="true" type="checkbox" class="filter_box" name="vehicles" value="vehicles" />Show vehicles</label>
                  <label><input defaultChecked="true" type="checkbox" class="filter_box" name="planet" value="planet" />Show planet</label>
              </form>
            </div>

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
