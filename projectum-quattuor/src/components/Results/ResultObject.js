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

  // Parses an incoming object recursively, so objects containing objects are displayed properly
  parseObject(object) {
    return Object.keys(object)/* Filters out unneccessary tags */
      .filter(attribute => attribute !== 'id')
      .map((attribute) => {
        if (typeof object[attribute] !== 'string' && typeof object[attribute] !== 'number' && object[attribute] !== null) {
          return (
            <li key={attribute}>
              <p>
                {attribute}
                :
              </p>
              <ul className="result_list_expanded">
                {this.parseObject(object[attribute])}
              </ul>
            </li>

          );
        }

        return (
          <li key={attribute}>
            <p>
              {attribute}
              :
              {' '}
              {object[attribute]}
            </p>
          </li>
        );
      });
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
          {this.parseObject(information)}
        </ul>
      </div>
    );
  }
}
