import React, { Component } from 'react';
import Checkbox from './Checkbox';

const APIQuery = 'https://swapi.co/api/';
const searchLabels = ['Planets', 'Starships', 'People', 'Species', 'Films', 'Vehicles'];


export default class Searchbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpointValue: '',
      searchValue: '',
    };
  }

  /* Funcionality to handle form and state of form */
  /* Changes state of value whenever the form is changed, in realtime. */
  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  /* Prevents default formsubmit for now, and logs the state that is saved. */
  handleSubmit(event) {
    event.preventDefault();
  }

  /* Handles state of checkboxes and sets state as to prepend necessary filter for request */
  handleCheck(event) {
    this.setState({ endpointValue: event.target.value });
    if (this.state.endpointValue === event.target.value) {
      this.setState({ endpointValue: '' });
    }
  }

  /* Creates the checkboxes dynamically from the list of labels. */

  createBoxes() {
    const checkboxArray = [];
    searchLabels.map(item => checkboxArray.push(
      <Checkbox
        key={item}
        className="madeBoxes"
        subKey={item}
        endpointValue={this.state.endpointValue}
        handleChange={e => this.handleChange(e)}
        handleCheck={e => this.handleCheck(e)}
        label={item}
      />,
    ));
    return checkboxArray;
  }

  render() {
    return (
      <div className="search_content">
        <div className="search_wrapper">
          <form onSubmit={this.handleSubmit} method="#">
            <label htmlFor="searchBar">
              <input type="text" id="searchbar" className="search_bar" value={this.state.searchValue} onChange={e => this.handleChange(e)} />
            </label>
            <div>
              <input type="submit" className="search_button" value="May the Force be with you." onClick={() => this.props.searchWithApi(APIQuery + this.state.endpointValue + this.state.searchValue)} />
            </div>
          </form>

        </div>

        <div className="checkboxes">
          {this.createBoxes(this.labels)}
        </div>

        <div className="sort_filters">
          {' '}
          {/* These are options that the user can make in order to sort and filter the results.
          The idea is to make it so that changing the value auto-perform a new request */}
          {/* For sorting the returned objects based on user choice */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, until href added */}
          <a href="#" className="sort_button">Choose sort method</a>
          <ul className="sorting">
            <li className="sort_optn" href="#" value="lexicographical">Alphabetically</li>
            <li className="sort_optn" href="#" value="by_added_date">By added date</li>
            <li className="sort_optn" href="#" value="by_added_date_rev">By added date reversed</li>
          </ul>
        </div>
      </div>
    );
  }
}
