import * as React from 'react';
import { connect } from 'react-redux';
import { exampleAction, exampleActionWithPayload, fetchDataThunk } from '../../state/example/actions';
import { exampleToggledSelector, examplePayloadSelector } from '../../state/example/selectors';
import { ExamplePresentation } from './ExamplePresentation';


class _ExampleContainer extends React.Component {

    componentDidMount() {
        this.props.doSomething();
        this.props.doSomethingWithPayload('testPayload');
    }




    render(){
        return <ExamplePresentation 
                    toggler={this.props.example}
                    text={this.props.txt}
                    api={this.props.callApi}
                />;
    }
}

/* Gets desired props from the state store */
const mapStateToProps = (state) => {
    return {
        example: exampleToggledSelector(state),
        txt: examplePayloadSelector(state),
    }
};

/* Callable actions as props */
const mapDispatchToProps = dispatch => {
    return {
        doSomething: () => dispatch(exampleAction()),
        doSomethingWithPayload: payload => dispatch(exampleActionWithPayload(payload)),
        callApi: () => dispatch(fetchDataThunk()),
    }
}

/* Connects the container to the store */
const ExampleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(_ExampleContainer);

export default ExampleContainer;