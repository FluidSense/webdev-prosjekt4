import React from 'react';

export default class ResultObject extends React.Component{

    /*Constructor closed*/
    constructor(props) {
        super(props);
        this.state = {
            information: this.props.information,
            expanded: false,
        };

    }
    /*Constructor closed*/

    /*Handles toggling of expansion*/
    handleClick = () => {
        this.state.expanded ? this.setState({ expanded: false }) : this.setState({ expanded: true });
    }


    render(){
        const { information } = this.state;

        /*Toggles expansion on/off*/
        if(!this.state.expanded){
            return <p onClick={this.handleClick}>{information.name}</p>
        }

        return(
            <div key={information.url}>
                <p key="0" onClick={this.handleClick}>{information.name}</p>
                <ul key="1" className="result_list_expanded">
                    {Object.keys(information)/*Filters out unneccessary tags*/
                    .filter(attribute => 
                        attribute !== "name" && attribute !== "created" && attribute !== "edited")
                    .map(attribute => 
                        <li key={attribute}>
                            <p>{attribute}: {information[attribute]}</p>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}