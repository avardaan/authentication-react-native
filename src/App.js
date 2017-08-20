import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

import {
  Header,
  Button,
  CardSection,
  Spinner
} from './components/common';
import LoginForm from './components/LoginForm';
import {config} from './utilities/firebase';


class App extends Component {
  // need 3-way conditionality. use null, false and true. BRILLIANT!
  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      }
      else {
        this.setState({ loggedIn: false })
      }
    })

  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: {
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Logout
            </Button>
          </CardSection>
        )
      }
      case false: {
        return <LoginForm />
      }
      default: {
        return (
          <View style={{marginTop: '60%'}}>
          <Spinner size='large' />
          </View>
        )
      }
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
