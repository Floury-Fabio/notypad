import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Home from 'pages/Home';
import NotepadsPage from 'pages/NotepadsPage';

import Navbar from 'components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/notepads" component={NotepadsPage} />
      <Route path="/home" component={Home} />
    </Switch>
  </Router>
);

export default App;
