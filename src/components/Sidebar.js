import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <NavLink to="/home" end activeClassName="active">
            <span className="icon">🏠</span> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/home/state" activeClassName="active">
            <span className="icon">🗺️</span> State
          </NavLink>
        </li>
        <li>
          <NavLink to="/home/city" activeClassName="active">
            <span className="icon">🏙️</span> City
          </NavLink>
        </li>
        <li>
          <NavLink to="/home/warehouse" activeClassName="active">
            <span className="icon">🏢</span> Warehouse
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
