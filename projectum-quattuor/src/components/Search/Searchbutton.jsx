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
            <label>
                <input type="text" className="search_bar" value={this.state.searchValue} onChange={this.handleChange} />
            </label>
            <div>
                <input type="submit" className="search_button" value="May the Force be with you." onClick={() => this.props.searchWithApi(APIQuery + this.state.endpointValue + this.state.searchValue)}/>
            </div>
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
