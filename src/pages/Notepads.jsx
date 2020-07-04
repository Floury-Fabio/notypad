import React, { useEffect } from 'react';
import * as notepadAPI from 'services/notepadAPI';
import { useSelector } from 'react-redux';

const Notepads = () => {
  const userId = useSelector((state) => state.authReducer.userId);

  useEffect(async () => {
    const notepads = await notepadAPI.getNotepads();
    console.log(notepads)
  });

  return (
    <h3> Notepads </h3>
  );
};

export default Notepads;
