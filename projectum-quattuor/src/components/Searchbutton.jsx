import React,{Component}  from 'react'

const APIQuery = 'https://swapi.co/api/';

class Searchbutton extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', data: []};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    /*Funcionality to handle form and state of form*/
    /* Changes state of value whenever the form is changed, in realtime. */
    handleChange(event) {
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

    handleJson(json){
        return JSON.stringify(this.state.data);
    }

    render() {
        return (
        <div className="search_wrapper"> 
            <form onSubmit={this.handleSubmit}>
            <label>
                <input type="text" className="search_bar" value={this.state.value} onChange={this.handleChange} />
            </label>
            <div>
            <input type="submit" className="search_button" value="May the Force be with you." />
            </div>
            </form>  
                 {this.handleJson()}
        </div>
        );
    }
}
            
export default Searchbutton;