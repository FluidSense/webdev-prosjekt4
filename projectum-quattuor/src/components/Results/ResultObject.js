import React from 'react';

export default class ResultObject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      information: this.props.information,
      expanded: false,
    };
  }

  /* Handles toggling of expansion */
  handleClick() {
    this.state.expanded ? this.setState({ expanded: false }) : this.setState({ expanded: true });
  }


  render() {
    const { information } = this.state;

    /* Toggles expansion on/off */
    if (!this.state.expanded) {
      /* Line below is disabled at the moment as each list object does not need keyboard listener */
      /* eslint-disable-next-line */
      return <p onClick={() => this.handleClick()}>{information.name}</p>;
    }

    return (
      <div key={information.url}>
        {/* eslint-disable-next-line */}
        <div key="0" onClick={() => this.handleClick()} role="button">{information.name}</div>
        <ul key="1" className="result_list_expanded">
          {Object.keys(information)/* Filters out unneccessary tags */
            .filter(attribute => attribute !== 'name' && attribute !== 'created' && attribute !== 'edited')
            .map(attribute => (
              <li key={attribute}>
                <p>
                  {attribute}
:
                  {' '}
                  {information[attribute]}
                </p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
