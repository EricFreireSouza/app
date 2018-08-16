import React from 'react';
import { Link } from 'react-router';

const Menu = () => {
    return (        
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to='/dashboard' activeClassName="active" className="nav-link" target="_blank">Dashboard</Link>                        
            </li>
            <li className="nav-item">
                <Link to='/teste' activeClassName="active" className="nav-link">My Workspace</Link>                        
            </li>
            <li className="nav-item dropdown">
                <Link to='/teste' activeClassName="active" className="nav-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pipelines</Link> 
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li className="dropdown">
                        <Link to='/teste' activeClassName="active" className="dropdown-toggle" id="sub" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Teste</Link>
                        <ul className="dropdown-menu" aria-labelledby="sub">
                            <li><Link to='/teste' activeClassName="active" className="zdropdown-item">Teste 1</Link></li>
                            <li><Link to='/teste' activeClassName="active" className="zdropdown-item">Teste 2</Link></li>
                            <li><Link to='/teste' activeClassName="active" className="zdropdown-item">Teste 3</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/teste' activeClassName="active" className="zdropdown-item">Pipe 1</Link></li>
                    <li><Link to='/teste' activeClassName="active" className="zdropdown-item">Pipe 2</Link></li>
                    <li><Link to='/teste' activeClassName="active" className="zdropdown-item">Pipe 3</Link></li>
                    <li><Link to='/teste' activeClassName="active" className="zdropdown-item">Pipe 4</Link></li>
                    <li><Link to='/teste' activeClassName="active" className="zdropdown-item">Pipe 5</Link></li>
                    <li><Link to='/teste' activeClassName="active" className="zdropdown-item">Pipe 6</Link></li>
                    <li><Link to='/teste' activeClassName="active" className="zdropdown-item">Pipe 7</Link></li>
                </ul>                    
            </li>
            <li className="nav-item">
                <Link to='/teste' activeClassName="active" className="nav-link">Tools</Link>                        
            </li>
            <li className="nav-item">
                <Link to='/teste' activeClassName="active" className="nav-link">Data Server</Link>                        
            </li>
            <li className="nav-item">
                <Link to='/teste' activeClassName="active" className="nav-link">Documentation</Link>                        
            </li>
            <li className="nav-item">
                <Link to='/teste' activeClassName="active" className="nav-link">Help</Link>                        
            </li>
            <li className="nav-item">
                <Link to='/releases' activeClassName="active" className="nav-link">Releases</Link>                        
            </li>
            <li className="nav-item">
                <Link to='/backlog' activeClassName="active" className="nav-link">Backlog</Link>
            </li>
            <li className="nav-item">
                <Link to='/sprints' activeClassName="active" className="nav-link">Sprints</Link>
            </li>
            <li className="nav-item">
                <Link to='/UserInterfaces' activeClassName="active" className="nav-link" target="_blank">User Interfaces</Link>
            </li>
            <li className="nav-item">
                <Link to='/Diagram' activeClassName="active" className="nav-link">Diagram</Link>
            </li>
        </ul>
    );
};

export default Menu;