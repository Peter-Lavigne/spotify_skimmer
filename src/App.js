import React, { Component } from 'react';
import './App.css';
import { Spinner } from '@salesforce/design-system-react';

class App extends Component {
  render() {
    return (
      <div style={{ position: 'relative', height: '5rem' }}>
        <Spinner
          size="small"
          variant="base"
          assistiveText={{ label: 'Small spinner' }}
        />
      </div>
    );
  }
}

export default App;
