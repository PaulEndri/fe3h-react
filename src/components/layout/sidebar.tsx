import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { MenuData } from '../../data/menu';

const sideBarStyles = {
    border: '0px !important'
};

const AppSidebar = () => {
    return (
        <Sidebar as={Menu} animation={window.innerWidth <= 1400 ? "push" : "overlay"} inverted visible vertical width="thin" style={sideBarStyles}>
            {MenuData.map((menuItem) => {
                if (menuItem.children.length <= 0) {
                    return (<Menu.Item key={menuItem.key}>
                        <Menu.Header as={NavLink} to={menuItem.to}>{menuItem.name}</Menu.Header>
                    </Menu.Item>)
                }

                return (<Menu.Item key={menuItem.key}>
                    <Menu.Header>{menuItem.name}</Menu.Header>
                    <Menu.Menu>
                        {menuItem.children.map((childMenuItem) => (
                            <Menu.Item key={childMenuItem.key} as={NavLink} to={childMenuItem.to}>
                                {childMenuItem.name}
                            </Menu.Item>
                        ))}
                    </Menu.Menu>
                </Menu.Item>);
            })}
        </Sidebar>
    );
}

export default AppSidebar;