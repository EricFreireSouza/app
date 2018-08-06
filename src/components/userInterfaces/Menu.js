import React from 'react';
import { Link } from 'react-router';

const Menu = () => {
    return ( 
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link to='/dashboard' activeClassName="active" className="nav-link active">Pipelines</Link>
            </li>
            <li className="nav-item">
                <Link to='/dashboard' activeClassName="active" className="nav-link disabled">Components</Link>
            </li>
            <li className="nav-item">
                <Link to='/dashboard' activeClassName="active" className="nav-link disabled">Packages</Link>
            </li>
        </ul>
    );
};

export default Menu;