import logo from './logo.svg';
import './App.css';
import React, {Component, useState} from 'react'

class App extends Component {
  constructor(props) {
    super(props); //propsy są bez zanczenia
    this.state = {value: ''};
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Dlugosc znakow wynosi:  ' + this.state.value.length);
    this.setState({ value : this.state.value.length});
    event.preventDefault();//event żeby nie propagował kolejnych
    if(this.state.value.length > 100)
    {

    }



  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
        Pole tekstowe:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form><br/>
    <label >{this.state.value.length}</label>
    </div>

    );
  }
}

export default App;
