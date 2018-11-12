import React from 'react';
import { connect } from 'react-redux';
import { updateResultSet, updateErrorState, updateLoadingState } from '../../state/search/actions';
import { resultSetSelector, errorSelector, loadingSelector } from '../../state/search/selectors';
import ResultSet from './ResultSet';

// eslint-disable-next-line no-underscore-dangle, max-len
const _ResultSetContainer = props => <ResultSet resultSetJson={props.resultSetJson} error={props.error} loading={props.loading} />;

/* Gets desired props from the state store */
const mapStateToProps = state => ({
  resultSetJson: resultSetSelector(state),
  error: errorSelector(state),
  loading: loadingSelector(state),
});

/* Callable actions as props */
const mapDispatchToProps = dispatch => ({
  pushToResultSet: payload => dispatch(updateResultSet(payload)),
  pushToError: payload => dispatch(updateErrorState(payload)),
  pushToLoading: payload => dispatch(updateLoadingState(payload)),
});

/* Connects the container to the store */
const ResultSetContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_ResultSetContainer);

export default ResultSetContainer;
