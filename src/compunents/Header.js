import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    const fontStyle={
        color:'white', 
        marginLeft:'150px',
    }
    return (
        <div className="header">
        <nav>
        <div className="input">
        <button>Search</button>
        <input type="text" placeholder="Search"/><FontAwesomeIcon style={fontStyle} icon={faHome} />
        <FontAwesomeIcon style={fontStyle} icon={faUsers} />
        <FontAwesomeIcon style={fontStyle} icon={faBell} />
        </div>
        
            
        </nav>
       
            
        </div>
    );
};

export default Header;