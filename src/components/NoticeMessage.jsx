import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanNotice } from 'redux/actions/requestActions';
import Alert from 'react-bootstrap/Alert';

const NoticeMessage = () => {
  const dispatch = useDispatch();
  const notice = useSelector((state) => state.requestReducer.notice);

  return (
    notice
    && (
    <>
      <Alert id="noticeMessage" variant="success" onClose={() => dispatch(cleanNotice())} dismissible>
        <p>
          {notice}
        </p>
      </Alert>
    </>
    )
  );
};

export default NoticeMessage;
