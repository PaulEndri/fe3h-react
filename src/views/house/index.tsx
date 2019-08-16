import React from 'react';
import {  Responsive } from 'semantic-ui-react';
import { History } from 'history';
import HouseMobileView from './house.mobile';
import HouseDesktopView from './house.desktop';

interface HouseViewProps {
    match: {
        params: {
            house: string
        }
    };
    history: History;
}

const HouseView = (props: HouseViewProps) => (
    <React.Fragment>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <HouseMobileView {...props} />
        </Responsive>
        <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
            <HouseDesktopView {...props} />
        </Responsive>
    </React.Fragment>

)

export default HouseView;