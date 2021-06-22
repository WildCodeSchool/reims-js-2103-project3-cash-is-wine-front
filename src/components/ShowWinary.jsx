import React from 'react';
import { useWinary } from '../contexts/WinaryContext';
import Bottle from './Bottle';

function ShowWinary() {
  const { winary } = useWinary();

  return (
    <>
      { winary && winary.map((bottle) => (
        <Bottle key={bottle.id} bottle={bottle} />
      ))}
    </>
  );
}

export default ShowWinary;
