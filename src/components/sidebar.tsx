import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
        </NavLink>
        <NavLink to="/personal-info" className={({ isActive }) => (isActive ? 'active' : '')}>
            Personal Info
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
            Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
        </NavLink>
        </div>
    );
}

export default Sidebar;