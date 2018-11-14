import React from 'react';
import { connect } from 'react-redux';
import {
  resultSetSelector, errorSelector, loadingSelector,
} from '../../state/search/selectors';
import ResultSet from './ResultSet';

// eslint-disable-next-line no-underscore-dangle
const _ResultSetContainer = props => (
  <ResultSet
    resultSetJson={props.resultSetJson}
    error={props.error}
    loading={props.loading}
    searchHistory={props.searchHistory}
  />);

/* Gets desired props from the state store */
const mapStateToProps = state => ({
  resultSetJson: resultSetSelector(state),
  error: errorSelector(state),
  loading: loadingSelector(state),
});

/* Connects the container to the store */
const ResultSetContainer = connect(
  mapStateToProps,
)(_ResultSetContainer);

export default ResultSetContainer;
