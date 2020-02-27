import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    inputvalue: 0,
    outputvalue: null,
  };

  submit = async () => {
    const currentValue = this.state.inputvalue;
    const factorial = await fetch('/factorial?inputvalue=' + currentValue);
    const outputval = await factorial.text();
    this.setState({
      outputvalue : outputval,
    });

  }
  myInput = e => {
    this.setState({
      inputvalue : e.target.value,
    });
  }

  render() {
    return <div>
      <h1>Factorial Number</h1>
      <label>Enter any number</label>
      <input type ="text" onChange={this.myInput}/>
      <button onClick={this.submit}>Submit</button>
      <h2>{this.state.outputvalue}</h2>
    </div>
  }
}

render(<App />, document.getElementById('root'));