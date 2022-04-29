import React from 'react';
import classes from './Header.module.css';
import logo from '../../resources/media/logo.png';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.blockImg}>
        <img className={classes.img} src={logo} alt="company-logo" />
      </div>
      <div className={classes.blockText}>
        <p className={classes.text}>
          Make <span className={classes.loveText}>love</span> not{' '}
          <span className={classes.warText}>war</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
