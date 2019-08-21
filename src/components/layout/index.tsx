import React from 'react';
import { Container, Sidebar, Segment, Responsive } from 'semantic-ui-react';
import Header from './header';
import AppSidebar from './sidebar';

interface LayoutProps {
    children: any;
};

const Layout = ({children}: LayoutProps) => (
    <div className="app-base-view">
        <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
            <Sidebar.Pushable as={Segment} style={{borderRadius: '0px', border: '0px'}}>
                <AppSidebar />
            <Sidebar.Pusher>
                <Container textAlign="center" padded className="app-base-content">
                    {children}
                </Container>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        </Responsive>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <Header />
            <Container fluid className="app-base-content">
                {children}
            </Container>
        </Responsive>
    </div>
)

export default Layout;