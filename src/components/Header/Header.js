import React from 'react';
import './Header.css';

const Header = () => {
    return (
        // Header section 
        <div className="container-fluid">
            <div className="header-body">
                <h2 className="title-name">Special Protection Group</h2>
                <h3 className="moto">Discipline <span className="middle"> Security </span> Progress</h3>
                <h4 className="details">Here the special police team for protect our country</h4>
                <h4 className="budget">Total Budget for make this: Fifty Lakh Taka</h4>
            </div>
        </div>
    );
};

export default Header;