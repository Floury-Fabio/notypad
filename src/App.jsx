import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Navbar from 'components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
    </Switch>
  </Router>
);

export default App;
