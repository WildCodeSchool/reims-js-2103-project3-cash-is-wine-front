import React from 'react';
import ApiCall from './ApiCall';

function WineList() {
  const url = 'http://localhost:8000/bottles';
  return (
    <button type="button" onClick={() => ApiCall(url)}> Wine list </button>
  );
}

export default WineList;
