import React from 'react';
import ApiCall from './ApiCall';
import { useWineList } from '../contexts/WineListContext';
import WineBottle from './WineBottle';

function WineLister() {
  const url = 'http://localhost:8000/bottles';
  const { WineList } = useWineList();
  return (
    <>
      <button type="button" onClick={() => ApiCall(url)}> Wine list </button>
      { WineList.map((wine) => (
        <WineBottle key={wine.id} />
      ))}
    </>
  );
}

export default WineLister;
