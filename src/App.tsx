import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

Amplify.configure(awsmobile);
class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello</p>
      </div>
    );
  }
}

export default withAuthenticator(App);
