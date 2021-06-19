import logo from './logo.svg';
import './App.css';
import React, {Component, useState} from 'react'

//const Greeting = props => <p>Hello {props.name} !</p>



function  Greeting(props){
  const [counter, setCounter] = useState(0);
  return(
    <div>
   <p>Hello {props.name} !</p>
  <p>Counter: {counter}</p>
  <button onClick={() => setCounter(counter + 0.5)} >+1</button>
  </div>
  )
}  

class App extends Component{
  constructor(props) {
    super(props);
    this.title ='React App';
    this.state = {clickCounter : 0};

  }
  renderClickCount(){
    return <p>{this.state.clickCounter}</p>;

  }


  render(){
    return(
      <div>
        <h1> {this.title} </h1>
        {this.props.prop1}
        <Greeting name="Grzegorz"/>
        <br/>
        <button onClick={() => this.setState({clickCounter: this.state.clickCounter + 1})}>+1</button>
        {this.renderClickCount()}
        
      </div>


    );
  }
}


// const App = props => <div>Helloworld/div>

// </div>
// function App() {
//   return (
//   <div className="Example" id="my-element"
//   style={{background:"green", color:"red"}}  
//   onClick={() => alert('hello')}
//   >
//   test
//   </div>
//   );
// }

export default App;
