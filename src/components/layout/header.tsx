import React from 'react'
import { Menu, Responsive, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { HouseService } from '../../services/house';

const headerStyles = {
    margin: '0em',
    border: '0em'
};


const Header = () => (
    <Menu as="div" inverted className="app-header" style={headerStyles}>
        <Responsive as="span" maxWidth={Responsive.onlyMobile.maxWidth} style={{display: 'contents'}}>
            {HouseService.HOUSES.map((house) => (
                <Menu.Item as={Link} to={`/house/${house.stub.toLowerCase()}`}>
                    <Image src={house.banner} height={50} />
                </Menu.Item>
            ))}
            <Menu.Item position="right">
                <Dropdown icon="ellipsis vertical" floating inline direction="left">
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
                        <Dropdown.Item as={Link} to ="/about">About</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </Responsive>
        <Responsive as="span" minWidth={Responsive.onlyMobile.maxWidth} style={{display: 'contents'}}>
            <Menu.Item position="right" name="home" as={Link} to="/" />
            <Menu.Item as={Link} to="/about" >About</Menu.Item>

        </Responsive>
    </Menu>
)

export default Header;