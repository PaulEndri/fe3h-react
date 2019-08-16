import React from 'react';
import logo from './logo.jpg'; // tslint:disable-line
import { Image, Container, Responsive, Grid } from 'semantic-ui-react';
import houses from '../../data/houses';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Container className="app-home-view" textAlign="center">
        <Image fluid src={logo} className="App-logo" alt="logo" />
        <p>
          Character Companion
        </p>
        <p>
          Click on a faction to begin your journey to find gifts, stats, and more!
        </p>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
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
    </Container>
  );
}

export default App;
