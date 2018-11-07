import * as React from 'react';
import { connect } from 'react-redux';
import { exampleAction, exampleActionWithPayload } from '../../state/example/actions';
import { exampleToggledSelector } from '../../state/example/selectors';


class _ExampleContainer extends React.Component {

    componentDidMount() {
        this.props.doSomething();
        this.props.doSomethingWithPayload('testPayload');
    }




    render(){
        return false;
    }
}

/* Gets desired props from the state store */
const mapStateToProps = (state) => {
    return {
        example: exampleToggledSelector(state),
    }
};

/* Callable actions as props */
const mapDispatchToProps = dispatch => {
    return {
        doSomething: () => dispatch(exampleAction()),
        doSomethingWithPayload: payload => dispatch(exampleActionWithPayload(payload))
    }
}

/* Connects the container to the store */
const ExampleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(_ExampleContainer);

export default ExampleContainer;