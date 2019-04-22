import React, { Component } from 'react';
import { Button, Input } from '@salesforce/design-system-react';

class ShortcutsInput extends Component {
  handleShortcut(event) {
    const input = event.target.value.substr(-1);
    const shortcut = this.props.shortcuts.find(({key}) => key === input);
    if (shortcut) {
      shortcut.onPress();
    } else {
      console.log(`unrecognized shortcut: ${input}`);
    }
  };

  render() {
    return (
      <Input
        placeholder="Click here to use keyboard shortcuts"
        onChange={event => this.handleShortcut(event)}
        value=''
      />
    );
  }
}

export default ShortcutsInput;
