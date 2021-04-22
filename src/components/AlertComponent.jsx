import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanError } from 'redux/actions/requestActions';
import Alert from 'react-bootstrap/Alert';

import NoticeMessage from 'components/NoticeMessage';
import ErrorMessage from 'components/ErrorMessage';

const AlertComponent = () => (
  <>
    <NoticeMessage />
    <ErrorMessage />
  < />
);

export default AlertComponent;
