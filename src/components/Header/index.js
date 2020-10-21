import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header({ focus }) {
  return (
    <div className="Header">
      <Link to="/" className={focus.focusHome && 'focus' }>Главная</Link>
      <Link to="/lib" className={focus.focusInfo && 'focus'}>Библиотеки</Link>
    </div>
  );
}

export default Header;
