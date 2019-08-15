import React from 'react';
import { Menu, Image, Sidebar } from 'semantic-ui-react';
import houses from '../../data/houses';
import { IHouse } from '../../types/ihouse';
import { NavLink } from 'react-router-dom';

const sideBarStyles = {
    border: '0px !important'
}
const AppSidebar = () => {
    return (
        <Sidebar as={Menu} animation="push" inverted visible vertical width="thin" style={sideBarStyles}>
            {houses.map((house: IHouse) => {
                return (
                    <Menu.Item borderless as={NavLink} to={`/house/${house.stub.toLowerCase()}`} key={house.stub}>
                        <Image src={house.banner} />
                    </Menu.Item>
                )
            })}
        </Sidebar>
    );
}

export default AppSidebar