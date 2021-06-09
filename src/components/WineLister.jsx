import React from 'react';
import { useWineList } from '../contexts/WineListContext';
import WineBottle from './WineBottle';

function WineLister() {
  const { wineList } = useWineList();
  return (
    <>
      { wineList && wineList.map((wine) => (
        <WineBottle key={wine.id} wine={wine} />
      ))}
    </>
  );
}

export default WineLister;
