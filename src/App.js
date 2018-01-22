import React, { Component } from 'react';
import SampleForm from './containers/sampleform';
import DisplayForm from './containers/displayform';
import './App.css';

class App extends Component {

  buttonAppClicked() {
    console.log('buttonAppClicked!!');
  }

  render() {

    return (
      <div className="App">
        <SampleForm buttonClicked={this.buttonAppClicked} />
        <br /><br /><br /><br />
        <DisplayForm />
      </div>
    );
  }
}

export default App;
