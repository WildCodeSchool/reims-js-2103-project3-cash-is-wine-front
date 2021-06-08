import React from 'react';
import axios from 'axios';
import { useWineList } from '../contexts/WineListContext';
import WineBottle from './WineBottle';

function WineLister() {
  const url = 'http://localhost:8000/bottles';
  const { wineList, setWineList } = useWineList();
  React.useEffect(() => {
    axios.get(url)
      .then((response) => (setWineList(response.data)));
  }, [wineList]);

  return (
    <>
      { wineList && wineList.map((wine) => (
        <WineBottle key={wine.id} wine={wine} />
      ))}
    </>
  );
}

export default WineLister;
