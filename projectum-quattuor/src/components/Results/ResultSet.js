import React from 'react';

import ResultObject from './ResultObject';

export class ResultSet extends React.Component {

    /*Constructor closed*/
    constructor(props) {
        super(props);
        this.state = {
            loadedIndex: 1,
            maxLoadObjects: 6, // This should be moved from state if dynamic changing of maximum objects is not desired. Could also be specified as a prop or state in Redux.
            fullyLoaded: false,
        };

    }
    /*Constructor closed*/

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

        if(this.props.resultSetJson.length <= this.state.maxLoadObjects * this.state.loadedIndex){
            this.setState({ fullyLoaded: true });
        }
    }

    render() {
        const { resultSetJson, error, loading } = this.props;
        const { loadedIndex, maxLoadObjects } = this.state;
        const displayResults = resultSetJson.slice(0, maxLoadObjects * loadedIndex);

        if(error){
            return <p className='error_message'>{error}</p>
        }

        if(loading){
            return <p className='loading_message'>Loading...</p>
        }

        if(resultSetJson.length < 1){
            return <p>No results retrieved.</p>
        }

        return (

            <div className="result_set" onScroll={this.handleScroll}>
                <h3>Click the results to see more information</h3>
                <ul className="result_list">
                    {displayResults.map((object, i) =>
                        <li key={i}>
                            <ResultObject information={object} />
                        </li>
                    )}
                </ul>
            </div>

        );
    }
}