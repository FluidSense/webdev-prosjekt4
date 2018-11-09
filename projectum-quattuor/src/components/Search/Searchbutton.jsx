import React,{Component}  from 'react'
import Checkbox from './Checkbox';

const APIQuery = 'https://swapi.co/api/';

export class Searchbutton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endpointValue: '',
            searchValue: '',
            isChecked: false,
        };
    }
    
    /*Funcionality to handle form and state of form*/
    /* Changes state of value whenever the form is changed, in realtime. */
    handleChange = (event) => {
        this.setState({searchValue: event.target.value});
    }

    /* Prevents default formsubmit for now, and logs the state that is saved.*/
    handleSubmit = (event) => {
        event.preventDefault();
        this.handleFetch();
    }

    /* Method for fecthing from the API. */
    handleFetch() {
        this.props.pushToError(null);  // Ensures that a previous error does not interfere with the new request
        this.props.pushToResultSet([]);  // Removes lingering data for better user experience

        fetch(APIQuery + this.state.endpointValue + this.state.searchValue)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Request failed');
                }
            })
            .then(data => {
                this.props.pushToResultSet(data.results);
                this.props.pushToLoading(false);
            })
            .catch(error => {
                this.props.pushToError(error.message);
                this.props.pushToLoading(false);
            })
    }

    /* Handles state of checkboxes and sets state as to prepend necessary filter for request */
    handleCheck = (event) => {
        this.setState({isChecked: event.target.isChecked});
        this.setState({endpointValue: event.target.value})
        if(this.state.endpointValue === event.target.value){
            this.setState({value: ''})
        }
    }

    render() {
        return (
        <div className="search_content">
        <div className="search_wrapper"> 
            <form onSubmit={this.handleSubmit} method="#" id="search_form">
                <label>
                    <input type="text" className="search_bar" value={this.state.searchValue} onChange={this.handleChange} />
                </label>
            </form>
            <button type="submit" form="search_form" className="search_button">May the Force be with you.</button>
        </div>

         <div className="checkboxes">
            <label className="check_label" for="planetBox">Planet
                <input
                    className="checkboxes"
                    id="planetBox"
                    type="checkbox"
                    checked={this.state.isChecked} 
                    onChange={this.handleCheck}
                    value="planets/?search="
                />
            </label>
            <label className="check_label">Starships
                <input
                    className="checkboxes"
                    type="checkbox"
                    checked={this.state.isChecked} 
                    onChange={this.handleCheck}
                    value="starships/?search="
                />
            </label>
            <label className="check_label">People
                <input
                    className="checkboxes"
                    type="checkbox"
                    checked={this.state.isChecked} 
                    onChange={this.handleCheck}
                    value="people/?search="
                />
            </label>
            <label className="check_label">Species
                <input
                    className="checkboxes"
                    id="planetBox"
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.handleCheck}
                    value="species/?search="
                />
            </label>
            <label className="check_label">Films
                <input
                    className="checkboxes"
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.handleCheck}
                    value="films/?search="
                />
            </label>
            <label className="check_label">Vehicles
                <input
                    className="checkboxes"
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.handleCheck}
                    value="vehicles/?search="
                />
            </label>
        </div>

        <div className="sort_filters"> {/*These are options that the user can make in order to sort and filter the results. The idea is to make it so that changing the value will automatically perform a new request for the result set.*/}
            {/*For sorting the returned objects based on user choice*/}
            <a href="#" className="sort_button">Choose sort method</a>
            <ul className="sorting">
                <li className="sort_optn" href="#" value="lexicographical">Alphabetically</li>
                <li className="sort_optn" href="#" value="by_added_date">By added date</li>
                <li className="sort_optn" href="#" value="by_added_date_rev">By added date reversed</li>
            </ul>
        </div>
        </div>
        );
    }
}
