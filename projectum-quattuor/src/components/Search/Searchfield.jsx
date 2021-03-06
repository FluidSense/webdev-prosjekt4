import React from 'react';

class Searchfield extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  // Updates local value to be sent on either button or enter-key.
  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <div className="search_wrapper">
        <label htmlFor="searchBar">
          <input type="text" id="searchbar" className="search_bar" value={this.state.searchValue} onChange={e => this.handleChange(e)} onKeyPress={e => (e.key === 'Enter' ? this.props.updateSearchValue(this.state.searchValue) : false)} />
        </label>
        <div>
          <input type="submit" className="search_button" value="May the Force be with you." onClick={() => this.props.updateSearchValue(this.state.searchValue)} />
        </div>
      </div>
    );
  }
}

export default Searchfield;
