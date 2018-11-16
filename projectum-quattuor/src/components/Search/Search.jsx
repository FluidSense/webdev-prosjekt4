import React, { Component } from 'react';
import Checkbox from './Checkbox';
import Searchfield from './Searchfield';
import { nameTranslate, APIQuery, searchLabels, sortLabels} from '../../consts';

export default class Searchbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpointValue: 'planets/',
      selectedItem: 'Planets',
      searchValue: '',
      selectedSort: sortLabels[0],
    };
  }

  /* Funcionality to handle form and state of form */
  /* Changes state of value whenever the form is changed, in realtime. */

  /* Handles state of checkboxes and sets state as to prepend necessary filter for request */
  handleOptionCheck(event, item) {
    this.setState({ endpointValue: event.target.value, selectedItem: item });
  }

  handleFilterCheck(item) {
    this.setState({ selectedSort: item });
  }

  /* Creates the checkboxes dynamically from the list of labels. */
  createOptions() {
    const checkboxArray = [];
    searchLabels.map(item => checkboxArray.push(
      <Checkbox
        key={item}
        className="madeBoxes"
        subKey={item}
        checked={item === this.state.selectedItem}
        handleCheck={e => this.handleOptionCheck(e, item)}
        label={item}
      />,
    ));
    return checkboxArray;
  }

  createSort() {
    const sortArray = [];
    sortLabels.map(item => sortArray.push(
      <Checkbox
        key={item}
        className="madeBoxes"
        subKey={item}
        checked={item === this.state.selectedSort}
        handleCheck={() => this.handleFilterCheck(item)}
        label={`${item[0]} ${item[1]}`}
      />,
    ));
    return sortArray;
  }


  makeNewSearch() {
    // Formats the sortBy-attribute to fit database attributes
    const sortBy = this.state.selectedSort[0] === 'Name' ? nameTranslate[this.state.selectedItem] : this.state.selectedSort[0];
    this.props.searchWithApi(`${APIQuery}${this.state.endpointValue}?search=${this.state.searchValue}&sortBy=${sortBy}&order=${this.state.selectedSort[1]}`); // Request content from search
    this.props.searchForHistoryApi(`${APIQuery}search`); // Request search history
  }

  // Updates and searches for data
  updateSearchValue(searchValue) {
    this.setState({ searchValue }, () => this.makeNewSearch());
  }

  render() {
    return (
      <div className="search_content">
        <Searchfield
          updateSearchValue={search => this.updateSearchValue(search)}
        />

        <div className="checkboxes">
          {this.createOptions()}
        </div>

        <div className="sortboxes">
          {this.createSort()}
        </div>
      </div>
    );
  }
}
