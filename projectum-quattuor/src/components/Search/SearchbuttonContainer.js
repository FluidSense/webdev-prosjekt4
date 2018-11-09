import React from 'react';
import { connect } from 'react-redux';
import { updateResultSet, updateErrorState, updateLoadingState } from '../../state/example/actions';
//import { resultSetSelector, errorSelector, loadingSelector } from '../../state/example/selectors';
import { Searchbutton } from './Searchbutton';


class _SearchbuttonContainer extends React.Component {

    render() {
        return <Searchbutton />;
    }

}

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
    mapDispatchToProps
)(_SearchbuttonContainer);

export default SearchbuttonContainer;