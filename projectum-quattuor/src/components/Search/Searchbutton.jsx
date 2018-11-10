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
        <React.Fragment>
        <div className="search_wrapper"> 
            <label>
                <input type="text" className="search_bar" value={this.state.searchValue} onChange={this.handleChange} />
            </label>
            <div>
                <input type="submit" className="search_button" value="May the Force be with you." onClick={() => this.props.searchWithApi(APIQuery + this.state.endpointValue + this.state.searchValue)}/>
            </div>
        </div>

         <div className="checkboxes">
            <div className="checkbox">
                <label for="planetBox">Planet
                    <input
                        className="checkboxes"
                        id="planetBox"
                        type="checkbox"
                        checked={this.state.isChecked} 
                        onChange={this.handleCheck}
                        value="planets/?search="
                        />
                </label>
            </div>
            <div className="checkbox">
                <label>Starships
                    <input
                        className="checkboxes"
                        type="checkbox"
                        checked={this.state.isChecked} 
                        onChange={this.handleCheck}
                        value="starships/?search="
                        />
                </label>
            </div>
            <div className="checkbox">
                <label>People
                    <input
                        className="checkboxes"
                        type="checkbox"
                        checked={this.state.isChecked} 
                        onChange={this.handleCheck}
                        value="people/?search="
                        />
                </label>
            </div>
        </div>

        <div className="sort_filters"> {/*These are options that the user can make in order to sort and filter the results. The idea is to make it so that changing the value will automatically perform a new request for the result set.*/}
            <form>
                {/*For sorting the returned objects based on user choice*/}
                <select className="sorting">
                    <option value="lexicographical">Alphabetically</option>
                    <option value="by_added_date">By added date</option>
                    <option value="by_added_date_rev">By added date reversed</option>
                </select>
            </form>
        </div>
        </React.Fragment>
        );
    }
}
