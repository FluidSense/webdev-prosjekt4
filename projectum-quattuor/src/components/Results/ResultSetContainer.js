import { connect } from 'react-redux';
import {
  resultSetSelector, errorSelector, loadingSelector,
} from '../../state/search/selectors';
import ResultSet from './ResultSet';

/* Gets desired props from the state store */
const mapStateToProps = state => ({
  resultSetJson: resultSetSelector(state),
  error: errorSelector(state),
  loading: loadingSelector(state),
});

/* Connects the container to the store */
const ResultSetContainer = connect(
  mapStateToProps,
)(ResultSet);

export default ResultSetContainer;
