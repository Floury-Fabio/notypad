import React, { useState, useEffect } from 'react';
import * as notepadAPI from 'services/notepadAPI';

const Notepads = () => {
  const [notepads, setNotepads] = useState([]);

  const fetchNotepads = async () => {
    const response = await notepadAPI.getNotepads();
    const body = await response.json();
    setNotepads(body);
  };

  useEffect(() => { fetchNotepads(); }, []);

  return (
    <>
      <h3> Notepads </h3>
      { notepads.length > 0
        ? <p> dedede </p>
        : <p> You haven&apos;t notepads </p> }
    </>
  );
};

export default Notepads;
