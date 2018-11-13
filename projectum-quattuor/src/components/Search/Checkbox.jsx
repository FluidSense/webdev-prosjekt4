import React,{Component}  from 'react'

class Checkbox extends Component {

render(){
    const labelname = this.props.label
    
    return(
        <label className="check_label">{this.props.label}
        <input
            onclick={this.toggleClass} 
            type="checkbox"
            id={this.props.key}
            checked={this.props.isChecked} 
            onChange={this.props.handleCheck}
            value={labelname.toLowerCase() + "/?search="}
        />
    </label>
    )
}
}
    export default Checkbox;