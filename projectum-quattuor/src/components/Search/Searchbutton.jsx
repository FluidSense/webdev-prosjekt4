import React,{Component}  from 'react'
import Checkbox from './Checkbox';

const APIQuery = 'https://swapi.co/api/';

class Searchbutton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isChecked: false,
            resultSetJson: [], // Make sure this is passed down as prop from App after search function
            loading: false,
            error: null,
        };
    }
    
    /*Funcionality to handle form and state of form*/
    /* Changes state of value whenever the form is changed, in realtime. */
    handleChange = (event) => {
        console.log("sad");
        this.setState({value: event.target.value});
    }
    /* Prevents default formsubmit for now, and logs the state that is saved.*/
    handleSubmit = (event) => {
        console.log('The force is with you. You wrote:' + this.state.value);
        event.preventDefault();
        this.handleFetch();
    }

    /* Method for fecthing from the API. */
    handleFetch() {
        fetch(APIQuery + this.state.value)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Request failed');
                }
            })
            .then(data => this.setState({ resultSetJson: data.results, loading: false }))
            .catch(error => this.setState({ error: error.message, loading: false }));
    }

    /* Stringifies JSON. */
    handleJson(){
        return JSON.stringify(this.state.resultSetJson);
    }

    /* Handles state of checkboxes and sets state as to prepend necessary filter for request */
    handleCheck = (event) => {
        this.setState({isChecked: event.target.isChecked});
        this.setState({value: event.target.value})
        if(this.state.value === event.target.value){
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

         <div className="checkboxes">
            <div className="checkbox">
                <label for="planetBox">Planet
                    <input
                        className="checkboxes"
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
        </React.Fragment>
        );
    }
}
            
export default Searchbutton;