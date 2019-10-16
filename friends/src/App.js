import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={FriendList} />
    </Router>
  );
}

export default App;