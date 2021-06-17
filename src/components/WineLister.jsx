import React from 'react';
import { useWineList } from '../contexts/WineListContext';
import WineBottle from './WineBottle';
import { useSearchBar } from '../contexts/SearchBarContext';

function WineLister() {
  const { searchBar } = useSearchBar();
  const { wineList } = useWineList();

  return (
    <>
      { wineList && wineList.filter((wine) => (Object.values(wine).join().toUpperCase()
        .includes(searchBar.toUpperCase())
      )).map((wine) => (
        <>
          <WineBottle key={wine.id} wine={wine} />
        </>
      ))}
    </>
  );
}

export default WineLister;
