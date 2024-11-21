import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">Личный<span>кабинет</span></Link>
        </header>
    );
};

export default Header;