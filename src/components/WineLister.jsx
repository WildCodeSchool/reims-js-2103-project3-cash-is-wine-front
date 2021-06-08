import React from 'react';
import ApiCall from './ApiCall';
import { useWineList } from '../contexts/WineListContext';
import WineBottle from './WineBottle';

function WineLister() {
  const url = 'http://localhost:8000/bottles';
  const { wineList } = useWineList();
  return (
    <>
      <button type="button" onClick={() => ApiCall(url)}> click</button>
      { wineList.map((wine) => (
        <WineBottle key={wine.id} />
      ))}
    </>
  );
}

export default WineLister;
