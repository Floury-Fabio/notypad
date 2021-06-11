import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Home from 'pages/Home';
import NotepadShowPage from 'pages/NotepadShowPage';
import NotepadsPage from 'pages/NotepadsPage';

import Navbar from 'components/Navbar';
import AlertComponent from 'components/AlertComponent';
import PrivateRoute from './PrivateRoute';

import 'styles/App.scss';

const App = () => (
  <div className="App">
    <Router>
      <AlertComponent />
      <Navbar />
      <Switch>
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/home" component={Home} />
        <PrivateRoute>
          <Route path="/notepads" component={NotepadsPage} />
          <Route path="/notepad/:notepadId" component={NotepadShowPage} />
        </PrivateRoute>
      </Switch>
    </Router>
  </div>
);

export default App;
