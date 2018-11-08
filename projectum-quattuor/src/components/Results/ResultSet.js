import React from 'react';

import ResultObject from './ResultObject';

export default class ResultSet extends React.Component {

    /*Constructor closed*/
    constructor(props) {
        super(props);
        this.state = {
            resultSetJson: [], // Make sure this is passed down as prop from App after search function
            loading: false,
        };

    }
    /*Constructor closed*/

    /*Test information, the state should be passed down as a prop from App*/
    componentDidMount() {
        fetch('https://swapi.co/api/people/?search=skywalker')
            .then(response => response.json())
            .then(data => this.setState({ resultSetJson: data.results })) // This would be Luke Skywalker
    }


    render() {
        const { resultSetJson } = this.state;

        return (
            <ul className="result_list">
                {resultSetJson.map(object =>
                    <li key={object.url}>
                        <ResultObject information={object}/>
                    </li>
                )}
            </ul>
        );
    }
}