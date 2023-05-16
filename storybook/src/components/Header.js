import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, logo, navLinks, user, onLogout }) => (
    <header>
        <img src={logo} alt="logo" />
        <h1>{title}</h1>
        <nav>
            {navLinks.map((link, index) => <a key={index} href={link.url}>{link.text}</a>)}
        </nav>
        <div>
            <span>{user}</span>
            <button onClick={onLogout}>Logout</button>
        </div>
    </header>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    navLinks: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired,
    user: PropTypes.string.isRequired,
    onLogout: PropTypes.func.isRequired,
};

export default Header;
