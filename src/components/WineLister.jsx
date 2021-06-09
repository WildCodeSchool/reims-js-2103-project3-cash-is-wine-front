import React from 'react';
import PropTypes from 'prop-types';
import { useWineList } from '../contexts/WineListContext';
import WineBottle from './WineBottle';

function WineLister({ text }) {
  const { wineList } = useWineList();
  console.log(wineList);
  console.log(typeof wineList);
  console.log(text);
  console.log(typeof text);
  return (
    <>
      { wineList && wineList.filter((wine) => (wine.estate.toUpperCase()
        .includes(text.toUpperCase())) || (wine.appellation.toUpperCase()
        .includes(text.toUpperCase())) || (wine.color.toUpperCase()
        .includes(text.toUpperCase())) || (wine.year.toString(10)
        .includes(text)))
        .map((wine) => (
          <WineBottle key={wine.id} wine={wine} />
        ))}
    </>
  );
}

WineLister.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WineLister;
