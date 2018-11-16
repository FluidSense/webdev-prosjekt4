import React from 'react';

import ResultObject from './ResultObject';

export default class ResultSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedIndex: 1,
      maxLoadObjects: 6,
      fullyLoaded: false,
    };
  }

  /*
  Checks whether the user has scrolled to the bottom of the page
  and if there are more objects to be loaded.
  */
  handleScroll(e) {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && !this.state.fullyLoaded) {
      this.loadNextBatch();
    }
  }

  /* Updates which new objects are to be loaded */
  loadNextBatch() {
    this.setState(prevState => ({ loadedIndex: prevState.loadedIndex + 1 }));

    if (this.props.resultSetJson.length <= this.state.maxLoadObjects * this.state.loadedIndex) {
      this.setState({ fullyLoaded: true });
    }
  }

  render() {
    const {
      resultSetJson,
      error,
      loading,
    } = this.props;
    const { loadedIndex, maxLoadObjects } = this.state;

    if (error) {
      return <p className="error_message">{error}</p>;
    }

    if (loading) {
      return <p className="loading_message">Loading...</p>;
    }

    if (!Array.isArray(resultSetJson.rows)) {
      return <p>Please choose a type option</p>;
    }

    if (resultSetJson.rows === undefined || resultSetJson.rows.length < 1) {
      return <p>No results retrieved.</p>;
    }

    const displayResults = resultSetJson.rows.slice(0, maxLoadObjects * loadedIndex);

    return (

      <div className="result_set" onScroll={e => this.handleScroll(e)}>
        <h3>Click the results to see more information</h3>
        <ul className="result_list">
          {Object.keys(displayResults).map((object, i) => (
            <li key={i}>
              <ResultObject information={displayResults[object]} />
            </li>
          ))}
        </ul>
      </div>

    );
  }
}
