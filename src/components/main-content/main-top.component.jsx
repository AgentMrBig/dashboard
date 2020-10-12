import React from 'react';
import './main-top.styles.scss';
import MainTopItem from './main-top-item.component';

const MainTop = () => {
  return (
    <div className="main-top">
      <MainTopItem />
      <MainTopItem />
      <MainTopItem />
      <MainTopItem />
    </div>
  );
};

export default MainTop;