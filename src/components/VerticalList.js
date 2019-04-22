import React, { Component } from 'react';

class VerticalList extends Component {
  render() {
    return (
      <ul className="slds-size_2-of-2 slds-text-align_center">
        {this.props.children.map(child => (
          <li>{child}</li>
        ))}
      </ul>
    );
  }
}

export default VerticalList;
