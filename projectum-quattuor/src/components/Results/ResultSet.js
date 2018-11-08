import React from 'react';

import ResultObject from './ResultObject';

export default class ResultSet extends React.Component {

    /*Constructor closed*/
    constructor(props) {
        super(props);
        this.state = {
            resultSetJson: [], // Make sure this is passed down as prop from App after search function
            loadedIndex: 1,
            maxLoadObjects: 6, // This should be moved from state if dynamic changing of maximum objects is not desired. Could also be specified as a prop or state in Redux.
            fullyLoaded: false,
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

        fetch('https://swapi.co/api/people')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Request failed');
                }
            })
            .then(data => this.setState({ resultSetJson: data.results, loading: false })) // This would be Luke, Anakin and Schmi Skywalker
            .catch(error => this.setState({ error: error.message, loading: false }));
    }

    /*Checks whether the user has scrolled to the bottom of the page and if there are more objects to be loaded*/
    handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom && !this.state.fullyLoaded){
            this.loadNextBatch();
        }
    }

    /*Updates which new objects are to be loaded*/
    loadNextBatch(){
        this.setState({ loadedIndex: this.state.loadedIndex + 1 });

        if(this.state.resultSetJson.length <= this.state.maxLoadObjects * this.state.loadedIndex){
            this.setState({ fullyLoaded: true });
        }
    }

    render() {
        const { resultSetJson, loadedIndex, maxLoadObjects, loading, error } = this.state;
        const displayResults = resultSetJson.slice(0, maxLoadObjects * loadedIndex);

        if(error){
            return <p>{error}</p>
        }

        if(loading){
            return <p>Loading...</p>
        }

        if(resultSetJson.length < 1){
            return <p>No results retrieved.</p>
        }

        return (

            <div className="result_set" onScroll={this.handleScroll}>
                <h3>Click the results to see more information</h3>
                <ul className="result_list">
                    {displayResults.map(object =>
                        <li key={object.url}>
                            <ResultObject information={object} />
                        </li>
                    )}
                </ul>
            </div>

        );
    }
}