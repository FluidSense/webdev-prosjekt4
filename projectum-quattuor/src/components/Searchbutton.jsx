import React,{Component}  from 'react'
import Checkbox from './Checkbox';

const APIQuery = 'https://swapi.co/api/';

class Searchbutton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: [],
            isChecked: false};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }
    
    /*Funcionality to handle form and state of form*/
    /* Changes state of value whenever the form is changed, in realtime. */
    handleChange(event) {
        console.log("sad");
        this.setState({value: event.target.value});
    }
    /* Prevents default formsubmit for now, and logs the state that is saved.*/
    handleSubmit(event) {
        console.log('The force is with you. You wrote:' + this.state.value);
        event.preventDefault();
        this.handleFetch();
    }

    /* Method for fecthing from the API. */

    handleFetch() {
        fetch(APIQuery + this.state.value)
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }

    /* Stringifies JSON. */
    handleJson(){
        return JSON.stringify(this.state.data);
    }


    /* Handles state of checkboxes and sets state as to prepend necessary filter for request */
    handleCheck(event) {
        this.setState({isChecked: event.target.isChecked});
        this.setState({value: event.target.value})
        if(this.state.value == event.target.value){
            this.setState({value: ''})
        }
    }


    render() {
        return (
        <React.Fragment>
        <div className="search_wrapper"> 
            <form onSubmit={this.handleSubmit} method="#">
            <label>
                <input type="text" className="search_bar" value={this.state.value} onChange={this.handleChange} />
            </label>
            <div>
            <input type="submit" className="search_button" value="May the Force be with you." />
            </div>
            </form>  
                 {this.handleJson()}
        </div>
        <div class="result_wrapper">
        <h1>Results</h1>
        {/*Section for checkboxes. Should be own componenet. */}
         <div className="checkboxes">
         <div className="checkbox">
            <label for="planetBox">Planet
                <input
                    className="checkboxesz"
                    id="planetBox"
                    type="checkbox"
                    checked={this.state.isChecked} 
                    onChange={this.handleCheck}
                    value="planet/?search="
                    />
            </label>
        </div>
        <div className="checkbox">
            <label>Starships
                <input
                    className="checkboxesz"
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
                    className="checkboxesz"
                    type="checkbox"
                    checked={this.state.isChecked} 
                    onChange={this.handleCheck}
                    value="people/?search="
                    />
            </label>
        </div>
                    </div>
        </div>

        <div class="result_set">
        <ul class="result_list"> {/*The objects below should be expandable link/button components that show the other properties of the returned JSON*/}
            <li>Object 1</li>
            <li>Object 2</li>
            <li>Object 3</li>
            <li>Object 4</li>
            <li>Object 5</li>
            <li>Object 6</li>
        </ul>
        </div>
    </React.Fragment>
        );
    }
}
            
export default Searchbutton;