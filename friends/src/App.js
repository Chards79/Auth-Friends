import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={FriendList} />
      <Route path="/form" component={FriendForm} />
    </Router>
  );
}

export default App;