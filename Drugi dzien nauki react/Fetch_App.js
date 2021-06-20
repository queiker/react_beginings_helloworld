import './App.css';
import React, {Component} from 'react';
import Profile from "./Profile"

const user = {
  name: "Brian",
  interests: "Reading, Swimming, Technology",
  age: 9,
  image: "https://i.pravatar.cc/200?img=4",
  color: "Red",
  movie: "Star Wars"
};

class App extends Component {
  constructor(props)
  {
      super(props);
      this.state =  {
        data : null
      };

  }
  componentWillMount()
  {
    this.loadProfiles();
  }

  loadProfiles()
  {
    fetch('http://localhost:39635/Profile')
    .then(response => response.json())
    .then(data => this.setState({data : data}));
  }

  render ()
  {
    return (
      <div className="App">
        {/* {this.loadProfiles()} */}
        {this.state.data && <Profile user={this.state.data} />}
      </div>
    );
  }
}

export default App;
