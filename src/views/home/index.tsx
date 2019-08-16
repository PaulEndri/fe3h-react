import React from 'react';
import logo from './logo.jpg'; // tslint:disable-line
import { Image } from 'semantic-ui-react';

function App() {
  return (
    <div className="app-home-view">
        <Image fluid src={logo} className="App-logo" alt="logo" />
        <p>
          Character Companion
        </p>
        <p>
          Click on a house to begin your journey to find gifts, stats, and more!
        </p>
    </div>
  );
}

export default App;
