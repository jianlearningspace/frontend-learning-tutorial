import React from 'react';
//import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { useAuthState } from '../context/UserContext';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login'

function App() {
  const {isAuthenticated} = useAuthState()
  return isAuthenticated ? <Home /> : <Login />;
}

export default App;
