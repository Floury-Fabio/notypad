import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from 'pages/SignIn';
import Navbar from 'components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/login" component={SignIn} />
    </Switch>
  </Router>
);

export default App;
