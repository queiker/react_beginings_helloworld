import './App.css';
import React, {Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state =  {
      showSecret : false
    };

    
  }

  toggleSecretMessage() {
    this.setState({
      showSecret: !this.state.showSecret
    });
  }

  secreteMessage() {
    return (
      <div>Secrete message!</div>
    )
  }
  render() {
    return (
      <div className="App">
        <button 
        onClick={this.toggleSecretMessage.bind(this)}>
          Show secrete message!
          </button>
        {/* { this.state.showSecret ? this.secreteMessage() : null} */}
        {this.state.showSecret && this.secreteMessage()}

        
      </div>
    );
  }
}

export default App;
