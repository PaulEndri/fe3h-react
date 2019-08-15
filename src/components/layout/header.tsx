import React from 'react'
import { Menu } from 'semantic-ui-react';

const headerStyles = {
    margin: '0em',
    border: '0em'
};

const Header = () => (
    <Menu as="div" inverted className="app-header" style={headerStyles}>
        <Menu.Item position="right" name="home" as="a" href="/" />
        <Menu.Item >
            Yo Yo Yo
        </Menu.Item>
    </Menu>
)

export default Header;