import React from 'react';
import { useWinary } from '../contexts/WinaryContext';
import Bottle from './Bottle';

function ShowWinary() {
  const { winary } = useWinary();

  return (
    <div className="bottles-container">
      { winary && winary.map((bottle) => (
        <Bottle key={bottle.id} bottle={bottle} />
      ))}
    </div>
  );
}

export default ShowWinary;
