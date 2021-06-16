import React from 'react';
import PropTypes from 'prop-types';
import { useWineList } from '../contexts/WineListContext';
import WineBottle from './WineBottle';

function WineLister({ text }) {
  const { wineList } = useWineList();
  return (
    <>
      { wineList && wineList.filter((wine) => (Object.values(wine).join().toUpperCase()
        .includes(text.toUpperCase())
      )).map((wine) => (
        <WineBottle key={wine.id} wine={wine} />
      ))}
    </>
  );
}

WineLister.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WineLister;
