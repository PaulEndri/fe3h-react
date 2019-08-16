import React from 'react';
import { Container, Sidebar, Segment, Responsive } from 'semantic-ui-react';
import Header from './header';
import AppSidebar from './sidebar';

interface LayoutProps {
    children: any;
};

const Layout = ({children}: LayoutProps) => (
    <div className="app-base-view">
        <Header />
        <Sidebar.Pushable as={Segment} style={{margin: '0px', borderRadius: '0px', border: '0px'}}>
            <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
                <AppSidebar />
            </Responsive>
            <Sidebar.Pusher>
                <Container fluid className="app-base-content">
                    {children}
                </Container>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <Header />

        </Responsive>
    </div>
)

export default Layout;