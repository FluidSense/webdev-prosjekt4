import React,{Component}  from 'react'

class Checkbox extends Component {

render(){
    const { label } = this.props;
    
    return(
        <label className="check_label">{label}
        <input
            onclick={this.toggleClass} 
            type="checkbox"
            id={this.props.key}
            checked={this.props.isChecked} 
            onChange={this.props.handleCheck}
            value={label.toLowerCase() + "/?search="}
        />
         </label>
        )
    }
}
    export default Checkbox;