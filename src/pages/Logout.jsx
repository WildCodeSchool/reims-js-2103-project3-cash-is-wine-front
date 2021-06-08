import React from 'react';
import { Redirect } from 'react-router-dom';

import { useLoginData } from '../contexts/LoginDataContext';

function Logout() {
  const { setLoginData } = useLoginData();

  setLoginData(null);

  return <Redirect to="/" />;
}

export default Logout;
