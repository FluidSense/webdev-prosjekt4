import React,{Component}  from 'react'

const APIQuery = 'https://swapi.co/api/';

class Searchbutton extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'planets/1', data: []};
    
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
        console.log('Be with you, and this was written:' + this.state.data);
        event.preventDefault();
    }

    handleJson(json){
        return JSON.stringify(this.state.data);
    }
    /*Lifecycle method that fetches from API*/
    componentDidMount() {
            fetch(APIQuery + this.state.value)
            .then(response => response.json())
            .then(data => this.setState({ data }));
        }


    render() {
        return (
        <div className="search_wrapper"> 
            <form onSubmit={this.handleSubmit}>
            <label>
                Search:
                <input type="text" className="search_bar" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="May the Force" />
            </form>  
            {this.handleJson()}
            json goes here
        </div>
        );
    }
    }
            
export default Searchbutton;
/*   constructor(props) {
    super(props);
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmet = this.handleSubmit.bind(this);
}
    
handleClick = () => {
    console.log('The Force may be with you');
    }

handleChange(event) {
    this.setState({value: event.target.value});
}

handleSubmit(event) {
    console('A term, you have searched.'+ this.state.value + 'it was.')
    event.preventDefault();
}

render() {
    return(
        <React.Fragment>
         <div class="search_wrapper">
            <h1>Search</h1>
            <form onSubmit={this.handleSubmit}>
            <FetchData searchTerm="planets/1/"/>
              <label>
                <input type="text" class="search_bar" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="May the Force"></input>
            </form>
          </div>    
        </React.Fragment>
    )
}

}*/

