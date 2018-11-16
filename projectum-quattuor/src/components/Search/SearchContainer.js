import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchData, fetchSearchHistory } from '../../state/search/actions';
import Search from './Search';


// eslint-disable-next-line no-underscore-dangle
export const _SearchContainer = props => (
  <Search
    searchWithApi={props.searchWithApi}
    searchForHistoryApi={props.searchForHistoryApi}
  />);

/* Callable actions as props */
const mapDispatchToProps = dispatch => ({
  searchWithApi: fetchUrl => dispatch(fetchSearchData(fetchUrl)),
  searchForHistoryApi: fetchUrl => dispatch(fetchSearchHistory(fetchUrl)),
});

/* Connects the container to the store */
const SearchContainer = connect(
  null,
  mapDispatchToProps,
)(_SearchContainer);

export default SearchContainer;
