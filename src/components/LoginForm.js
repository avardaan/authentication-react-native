import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  }

  // on Log In press
  onButtonPress() {
    const { email, password } = this.state;

    // reset error message and show spinner if login attempt made again
    this.setState({ error: '', loading: true })

    // try to sign in
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    // if fail, try to register user
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      // if fail, display error message
      .catch(this.onLoginFail.bind(this))
    })
  }

  // reset text fields, reset error, and set loading to false
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    })
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    })
  }

  // having a conditional within a text was annoying because the container
  // for the conditional would still show up and mess up the styling
  // so i put it in a function which returns nothing
  // if there is no error
  // :D
  errorMessage() {
    if (this.state.error) {
      return (
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
      )
    }
    // else return nothing
  }

  // runs when LogIn button is pressed. CONDITIONAL RENDERING
  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />
    }
    else {
      return (
        <Button
          onPress={(this.onButtonPress.bind(this))}
        >
          Log In
        </Button>
      )
    }
  }

  render() {

    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='Enter Email'
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            placeholder='Enter Password'
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
            secureTextEntry={true}
          />
        </CardSection>

        {this.errorMessage()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
}



export default LoginForm
