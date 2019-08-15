import React from 'react';
import { Container, Sidebar, Segment } from 'semantic-ui-react';
import Header from './header';
import AppSidebar from './sidebar';

interface LayoutProps {
    children: any;
};

const Layout = ({children}: LayoutProps) => (
    <Container className="app-base-view" fluid>
        <Header />
        <Sidebar.Pushable as={Segment} style={{margin: '0px', borderRadius: '0px', border: '0px'}}>
            <AppSidebar />
            <Sidebar.Pusher>
                <Container fluid className="app-base-content">
                    {children}
                </Container>
            </Sidebar.Pusher>
        </Sidebar.Pushable>

    </Container>
)

export default Layout;