import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <h1>My Friends List</h1>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={FriendList} />
      </Router>

    </div>
  );
}

export default App;