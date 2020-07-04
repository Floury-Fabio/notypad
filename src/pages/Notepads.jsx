import React, { useEffect } from 'react';
import * as notepadAPI from 'services/notepadAPI';

const Notepads = () => {
  const fetchNotepads = async () => {
    const response = await notepadAPI.getNotepads();
    console.log(await response.json())
  };

  useEffect(() => { fetchNotepads(); }, []);

  return (
    <h3> Notepads </h3>
  );
};

export default Notepads;
