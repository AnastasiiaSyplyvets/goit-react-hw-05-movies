import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './SharedLayout.css';

export const SharedLayout = () => {
  return (
    <div class="container">
      <header class="header">
        <ul class="page-list">
          <li class="page-list-item">
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li class="page-list-item">
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </div>
  );
};
