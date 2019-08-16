import React from 'react'
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const headerStyles = {
    margin: '0em',
    border: '0em'
};

const Header = () => (
    <Menu as="div" inverted className="app-header" style={headerStyles}>
        <Menu.Item position="right" name="home" as={Link} to="/" />
        <Menu.Item as={Link} to="/about" >About</Menu.Item>
    </Menu>
)

export default Header;