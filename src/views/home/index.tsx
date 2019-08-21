import React from 'react';
import logo from './logo.jpg'; // tslint:disable-line
import { Image, Container, Responsive, Grid, Header, Segment } from 'semantic-ui-react';
import houses from '../../data/houses';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Container className="app-home-view" textAlign="center">
        <Image fluid src={logo} className="App-logo" alt="logo" />
        <Header as="h1">
          Character Companion
        </Header>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <p>
            Click on a faction to begin your journey to find gifts, stats, and more!
          </p>
          <Grid columns={2}>
            {houses.map((house) => (
              <Grid.Column>
                <Link to={`/house/${house.stub.toLowerCase()}`}>
                  <Image fluid src={house.banner}></Image>

                </Link>
              </Grid.Column>
            ))}
          </Grid>
        </Responsive>
        <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
          <Segment>
            <Header as="h4">
              About This Site
            </Header>
            <p>
              This site/project is a fan project to provide a user friendly way to access all the data the amazing community has amassed.
              The data was gathered from all the fine folk at the fe3h subreddit, so go checkout the thread for more credit:
              <a href="https://www.reddit.com/r/FireEmblemThreeHouses/comments/ck45lu/three_houses_data_compilation/"> here.</a>
            </p>
            <p>
              This is a super alpha release, gauging interest, opinion, getting feedback, etc. Have questions, comments, concerns? Message me on reddit (u/paulendri) or on discord (Paul Endri#2569)
            </p>
            <p>
              All images, names, and other trademarked contents are property of Nintendo and related trademarks/copyrights. No ownership is claimed by the author of this site over any of it's intellectual property.
            </p>
            <p>
              The source code for this page can be found at github over <a href="https://github.com/PaulEndri/fe3h-react">here.</a>
            </p>
            </Segment>
        </Responsive>
    </Container>
  );
}

export default App;
