import React,{Component}  from 'react'
import Checkbox from './Checkbox'

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
        <form onSubmit={this.handleSubmit} method="#">
        <label>
                <input type="text" className="search_bar" value={this.state.searchValue} onChange={this.handleChange} />
            </label>
            <div>
                <input type="submit" className="search_button" value="May the Force be with you." onClick={() =>  this.props.searchWithApi(APIQuery + this.state.endpointValue + this.state.searchValue)}/>
            </div>
        </form> 
           
        </div>
    
         <div className="checkboxes">   
         <Checkbox 
         endpointValue={this.state.endpointValue}
         handleChange={this.handleChange}
         handleCheck={this.handleCheck}
         label="Planets"
         />
         <Checkbox 
         endpointValue={this.state.endpointValue}
         handleChange={this.handleChange}
         handleCheck={this.handleCheck}
         label="Starships"
         />

        <Checkbox 
         endpointValue={this.state.endpointValue}
         handleChange={this.handleChange}
         handleCheck={this.handleCheck}
         label="People"
         />

        <Checkbox 
         endpointValue={this.state.endpointValue}
         handleChange={this.handleChange}
         handleCheck={this.handleCheck}
         label="Species"
         />
         <Checkbox 
         endpointValue={this.state.endpointValue}
         handleChange={this.handleChange}
         handleCheck={this.handleCheck}
         label="Films"
         />

        <Checkbox 
         endpointValue={this.state.endpointValue}
         handleChange={this.handleChange}
         handleCheck={this.handleCheck}
         label="Vehicles"
         />

           
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
