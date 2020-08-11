import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Home from 'pages/Home';
import NotepadsPage from 'pages/NotepadsPage';

import Navbar from 'components/Navbar';

import { cleanError } from 'redux/actions/requestActions';
import Alert from 'react-bootstrap/Alert';

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.requestReducer.error);

  const errorMessage = () => {
    let content;
    if (error !== null) {
      content = (
        <Alert variant="danger" onClose={() => dispatch(cleanError())} dismissible>
          <p>
            {error}
          </p>
        </Alert>
      );
    }
    return content;
  };

  return (
    <Router>
      { errorMessage() }
      <Navbar />
      <Switch>
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/notepads" component={NotepadsPage} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
