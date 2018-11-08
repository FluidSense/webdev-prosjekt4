import React from 'react';

import ResultObject from './ResultObject';

export default class ResultSet extends React.Component {

    /*Constructor closed*/
    constructor(props) {
        super(props);
        this.state = {
            resultSetJson: [], // Make sure this is passed down as prop from App after search function
            loading: false,
            error: null,
        };

    }
    /*Constructor closed*/

    /*Test information, the state should be passed down as a prop from App*/
    componentDidMount() {
        this.loadTestContent();
    }

    loadTestContent(){
        this.setState({ loading: true });

        fetch('https://swapi.co/api/people/?search=skywalkersa')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Request failed');
                }
            })
            .then(data => this.setState({ resultSetJson: data.results, loading: false })) // This would be Luke, Anakin and Schmi Skywalker
            .catch(error => this.setState({ error, loading: false }));
    }

    render() {
        const { resultSetJson, loading, error } = this.state;

        if(error){
            return <p>{error}: {error.message}</p>
        }

        if(loading){
            return <p>Loading...</p>
        }

        if(resultSetJson.length < 1){
            return <p>No results retrieved.</p>
        }

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