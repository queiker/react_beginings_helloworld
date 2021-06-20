import './App.css';
import React, {useState, useEffect} from 'react';
import Profile from "./Profile"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

const About = () => (
  <div>
    <h1>About page</h1>
    <p>Inofrmation about page!</p>
  </div>
);

const Homepage = () => (
  <div>
    <h1>Home page</h1>
    <p>This information home page</p>
  </div>
)

const App = () => (
  <Router>
    <Switch>
      <Route>
        <Homepage />
      </Route>
    </Switch>
  </Router>
)