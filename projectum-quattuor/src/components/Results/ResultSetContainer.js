import React from 'react';
import { connect } from 'react-redux';
//import { updateResultSet, updateErrorState, updateLoadingState } from '../../state/example/actions';
import { resultSetSelector, errorSelector, loadingSelector } from '../../state/example/selectors';
import { ResultSet } from './ResultSet';

class _ResultSetContainer extends React.Component{

    render(){
        return <ResultSet 
        resultSetJson={this.props.resultSetJson} 
        error={this.props.error} 
        loading={this.props.loading}
        />;
    }

}

/* Gets desired props from the state store */
const mapStateToProps = (state) => {
    return {
        resultSetJson: resultSetSelector(state),
        error: errorSelector(state),
        loading: loadingSelector(state),
    }
};

/* Connects the container to the store */
const ResultSetContainer = connect(
    mapStateToProps,
)(_ResultSetContainer);

export default ResultSetContainer;