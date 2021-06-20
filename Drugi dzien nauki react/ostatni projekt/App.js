import './App.css';
import React, {useState, useEffect} from 'react';
import Profile from "./Profile"
import {BrowserRouter as Router,Switch,Route, useLocation, Link, useRouteMatch} from "react-router-dom";

const Items = [
  'Lorem Ipsum',
  'Ipsum Dipsum',
  'Foo Bar',
  'A little black cat',
  'A lazy fox',
  'A jumping dog'
];
const Bio = () => (
  <div>
    <h2>Bio</h2>
    <p>Cool bio</p>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>my@email.com</p>
  </div>
)

const Navbar = () => (
  <div>
    <Link to="/">Home</Link>&nbsp;<Link to="/about">About</Link>
  </div>
)
const doSearch = term => {
  if(!term) {
    return Items;
  }

  return Items.filter(
    item => item.toLowerCase().indexOf(term.toLowerCase()) !== -1
  );
}

const About = () => {
  
  const {path, url} = useRouteMatch();

  return (
    
  <Router>
    <div>
      <h1>About page</h1>
      <br/>
      <Link to={`${url}`}>About home</Link>
      <br />
      <Link to={`${url}/contact`}>Contact</Link>
      <br />
      <Link to={`${url}/bio`}>Bio</Link>
      <br />
      <Switch>
        <Route path={`${path}/contact`}>
          <Contact />
        </Route>
        <Route path={`${path}/bio`}>
          <Bio />
        </Route>
      </Switch>
    </div>
  </Router>);
}

const Homepage = () => (
  <div>
    <h1>Home page</h1>
    <p>This information home page</p>
  </div>
)

const Search = props => {
  const query = new URLSearchParams(useLocation().search);
  const term = query.get('q');
  const returned = doSearch(term);

  return (
    <div>
      <h1>Search page</h1>
      <p>Found results for {term}:</p>
      <ul>
        {returned.map(t => (<li key={t}>{t}</li>))}
      </ul>
    </div>
  )
}

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="*">
        <h1>404 - Component Not Found</h1>
      </Route>
    </Switch>
  </Router>
)

export default App;
