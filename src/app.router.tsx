import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/home/';
import HouseView from "./views/house";
import Layout from "./components/layout";
import CharacterView from "./views/character"
import About from "./views/about";
import CharactersView from "./views/characters";
import ClassesView from "./views/classes";
import RecruitmentTable from "./views/recruitment";

class AppRouter extends React.Component<any, any> {
    render() {
        return (
            <Router>
                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/house/:house" component={HouseView} />
                    <Route exact path="/house/:house/character/:character" component={CharacterView} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/characters" component={CharactersView} />
                    <Route exact path="/classes" component={ClassesView} />
                    <Route exact path="/recruitment" component={RecruitmentTable} />
                </Layout>
            </Router>
        );
    }
}

export default AppRouter;