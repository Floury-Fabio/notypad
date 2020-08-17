import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { callAPI } from 'redux/middlewares/requestMiddlewares';
import NotepadModal from 'components/NotepadModal';

const NotepadRow = ({ notepad }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [data, setData] = useState({ notepadId: notepad.id, title: notepad.title });

  useEffect(() => {
    const changeTitle = async () => {
      if (data.title !== notepad.title) {
        const response = await dispatch(callAPI({ callName: 'updateNotepad', args: data }));
        if (response.status === 200) {
          setShow(false);
        }
      }
    };
    changeTitle();
  }, [data, dispatch, notepad.title]);

  return (
    <>
      <tr>
        <td>{data.title}</td>
        <td width="10%">
          <Button variant="primary" onClick={() => setShow(true)}>upd</Button>
        </td>
      </tr>
      <NotepadModal show={show} onHide={() => setShow(false)} data={data} setData={setData} />
    </>
  );
};
export default NotepadRow;

NotepadRow.propTypes = {
  notepad: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};
