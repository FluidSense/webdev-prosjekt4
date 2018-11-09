import React,{Component}  from 'react'

class Checkbox extends Component {
    constructor() {
        super();
        this.state = {
            isChecked: false,
        }
    }

render(){
    const { label } = this.props;
    const { isChecked } = this.state;
    return(
        <div className="checkbox">
            <label>
                <input
                    type="checkbox"
                    value={label} 
                    checked={isChecked} 
                    onChange
                
                    />
                {label}
            </label>
        </div>
    )
}

}

export default Checkbox;