import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { MenuData } from "../../data/menu";

const headerStyles = {
    margin: "0em",
    border: "0em"
};

const Header = () => (
    <Menu as="div" inverted style={headerStyles} attached="top" fluid>
        {MenuData.map(({ to, key, name, children }, index) => {
            if (children.length === 0) {
                return (
                    <Menu.Item as={Link} to={to} key={key}>
                        {name}
                    </Menu.Item>
                );
            }

            const extra: any = {};

            if (index === MenuData.length - 1) {
                extra.direction = "left";
            }

            return (
                <Dropdown key={key} text={name} pointing className="link item" {...extra}>
                    <Dropdown.Menu>
                        {children.map(childItem => (
                            <Dropdown.Item key={childItem.key} as={Link} to={childItem.to}>
                                {childItem.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            );
        })}
    </Menu>
);

export default Header;
