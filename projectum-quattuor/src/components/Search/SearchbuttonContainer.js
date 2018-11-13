import React from 'react';
import { connect } from 'react-redux';
import { fetchDataThunk } from '../../state/search/actions';
import { resultSetSelector, errorSelector, loadingSelector } from '../../state/search/selectors';
import Searchbutton from './Searchbutton';


// eslint-disable-next-line no-underscore-dangle
const _SearchbuttonContainer = props => <Searchbutton searchWithApi={props.searchWithApi} />;

/* Gets desired props from the state store */
const mapStateToProps = state => ({
  resultSetJson: resultSetSelector(state),
  error: errorSelector(state),
  loading: loadingSelector(state),
});

/* Callable actions as props */
const mapDispatchToProps = dispatch => ({
  searchWithApi: fetchUrl => dispatch(fetchDataThunk(fetchUrl)),
});

/* Connects the container to the store */
const SearchbuttonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_SearchbuttonContainer);

export default SearchbuttonContainer;
