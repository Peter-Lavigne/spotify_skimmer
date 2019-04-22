import React, { Component } from 'react';
import { Button } from '@salesforce/design-system-react';

class ControlButtons extends Component {
  render() {
    return this.props.buttons.map(({text, onClick}) => (
      <Button
        className="slds-m-horizontal_small"
        onClick={onClick}
      >
        {text}
      </Button>
    ));
  }
}

export default ControlButtons;
