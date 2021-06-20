import './App.css';
import React, {Component} from 'react';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state =  {
      cycle : 0
    };
    
    this.interval = setInterval(() => this.setState({ cycle : this.state.cycle + 1}), 2000);
    console.log("Constructor");

  }

  componentDidUpdate(prevProps, prevState) 
  {
    console.log('prevProps:', prevProps);
    console.log('prevState:', prevState);

    console.log("Component Did Update")
  }
  componentDidMount()
  {
    console.log("Component Did mount");
  }  

  clearIntervalCustom()
  {
    console.log("onClick");
    clearInterval(this.interval);
  }

  render() {
    console.log("Render");
    return (
      <div className="App">
        <h1>Hello Lifecycle: Cycle {this.state.cycle}</h1>
        <button onClick={this.clearIntervalCustom.bind(this)}>Stop</button>
      </div>
    );
  }
}

export default App;
