import { connect } from 'react-redux';
import { fetchSearchData, fetchSearchHistory } from '../../state/search/actions';
import Search from './Search';

/* Callable actions as props */
const mapDispatchToProps = dispatch => ({
  searchWithApi: fetchUrl => dispatch(fetchSearchData(fetchUrl)),
  searchForHistoryApi: fetchUrl => dispatch(fetchSearchHistory(fetchUrl)),
});

/* Connects the container to the store */
const SearchContainer = connect(
  null,
  mapDispatchToProps,
)(Search);

export default SearchContainer;
