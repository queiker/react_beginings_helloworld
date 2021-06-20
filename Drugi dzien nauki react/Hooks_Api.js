import './App.css';
import React, {useState, useEffect} from 'react';
import Profile from "./Profile"

function App (){

  const [data, setData] = useState([]);

  useEffect(() => loadData(), []);

const loadData = async () => {
  const response = await fetch('http://localhost:39635/Profile');
  const data = await response.json();
  setData(data);
  console.log(data);
}

  return (
      <div className="App">
        {data && <Profile user={data} />}
      </div>
    );
  
}

export default App;
