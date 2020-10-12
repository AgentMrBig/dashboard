import React from 'react';
import './main-content.styles.scss';
import MainLarge from './main-large.component';
import MainTop from './main-top.component';

const MainCon = () => {
  return (
    <div className="main-con">
      <MainTop />
      <MainLarge />
      <MainLarge />
      <MainLarge />
    </div>
  );
};

export default MainCon;