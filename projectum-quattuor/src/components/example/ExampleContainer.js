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
        console.log('state in exampleContainer:',this.state);
        return false;
    }
}

const mapStateToProps = (/* Pass state in here if needed, but beware that it might cause extra renderings */) => {
    return {
        example: exampleToggledSelector(),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        doSomething: () => dispatch(exampleAction()),
        doSomethingWithPayload: payload => dispatch(exampleActionWithPayload(payload))
    }
}

const ExampleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(_ExampleContainer);

export default ExampleContainer;