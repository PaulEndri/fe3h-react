import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/home/';
import HouseView from "./views/house";
import Layout from "./components/layout";
import CharacterView from "./views/character"
import About from "./views/about";

class AppRouter extends React.Component<any, any> {
    render() {
        return (
            <Router>
                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/house/:house" component={HouseView} />
                    <Route exact path="/house/:house/character/:character" component={CharacterView} />
                    <Route exact path="/about" component={About} />
                </Layout>
            </Router>
        );
    }
}

export default AppRouter;