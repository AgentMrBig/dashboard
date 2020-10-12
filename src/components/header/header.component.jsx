import React from 'react';
import './header.styles.scss';


const Header = () => {
  return (
    // Main heading container
    <div className="header-con">

      {/* header-left BEGIN */}
      <div className="header-left">
        <div className="brand-icon">

        </div>
        <div className="brand-txt">
          <h1>Dashboard</h1>
         
          <p>A dashboard Template</p>
        </div>
      </div>
      {/* header-left END */}

      {/* header-center BEGIN */}
      <div className="header-center">
        <input className="header-input"></input>

        <button className="header-search">O</button>
        
      </div>
      {/* header-center END */}

      {/* header-right BEGIN */}
      <div className="header-right">Right</div>
      {/* header-right END */}
    </div>
  );
};

export default Header;