import React from 'react';
import MainLarge from './main-large.component';
import './main-lower.styles.scss'

const MainLower = () => {
  return (
    <div className="main-lower">
      <MainLarge />
      <MainLarge />
      <MainLarge />
      <MainLarge />
    </div>
  );
};

export default MainLower;