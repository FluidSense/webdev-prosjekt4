import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchData, fetchSearchHistory } from '../../state/search/actions';
import Searchbutton from './Searchbutton';


// eslint-disable-next-line
const _SearchbuttonContainer = props => <Searchbutton searchWithApi={props.searchWithApi} searchForHistoryApi={props.searchForHistoryApi} />;

/* Callable actions as props */
const mapDispatchToProps = dispatch => ({
  searchWithApi: fetchUrl => dispatch(fetchSearchData(fetchUrl)),
  searchForHistoryApi: fetchUrl => dispatch(fetchSearchHistory(fetchUrl)),
});

/* Connects the container to the store */
const SearchbuttonContainer = connect(
  null,
  mapDispatchToProps,
)(_SearchbuttonContainer);

export default SearchbuttonContainer;
