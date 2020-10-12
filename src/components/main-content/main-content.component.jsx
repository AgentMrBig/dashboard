import React from 'react';
import './main-content.styles.scss';
import MainLarge from './main-large.component';
import MainTop from './main-top.component';
import MainLower from './main-lower.component';

const MainCon = () => {
  return (
    <div className="main-con">
      <MainTop />
      <MainLower />
      
    </div>
  );
};

export default MainCon;