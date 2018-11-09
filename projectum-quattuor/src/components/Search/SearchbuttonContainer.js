import React from 'react';
import { connect } from 'react-redux';
import { updateResultSet, updateErrorState, updateLoadingState } from '../../state/search/actions';
import { resultSetSelector, errorSelector, loadingSelector } from '../../state/search/selectors';
import { Searchbutton } from './Searchbutton';


class _SearchbuttonContainer extends React.Component {

    render() {
        return <Searchbutton 
        pushToResultSet={this.props.pushToResultSet} 
        pushToError={this.props.pushToError} 
        pushToLoading={this.props.pushToLoading}
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

/* Callable actions as props */
const mapDispatchToProps = dispatch => {
    return {
        pushToResultSet: payload => dispatch(updateResultSet(payload)),
        pushToError: payload => dispatch(updateErrorState(payload)),
        pushToLoading: payload => dispatch(updateLoadingState(payload)),
    }
}

/* Connects the container to the store */
const SearchbuttonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(_SearchbuttonContainer);

export default SearchbuttonContainer;