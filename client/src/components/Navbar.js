import React, { } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuthContext } from '../hooks/authContext.hook';

export const Navbar = () => {
  const history = useHistory();
  const { logout } = useAuthContext();
  const logoutHandler = e => {
    e.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
        <span className="brand-logo">Сокращение ссылок</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/create">Создать</NavLink></li>
          <li><NavLink to="/links">Ссылки</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  )
}
