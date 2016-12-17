import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import TappableRow from '../common/TappableRow'
import styles from '../common/styles';
// import { HELLO } from 'react-native-dotenv'
console.log(TappableRow);
export default class Scene extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      user: null,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const configured = await GoogleSignin.configure({});
      if (configured) {
        const user = await GoogleSignin.currentUserAsync();
        console.log(user);
        this.setState({ user, error: null });
      }
    } catch (error) {
      this.setState({ error });
    }
  }

  async signIn() {
    try {
      const user = await GoogleSignin.signIn()
      this.setState({ user, error: null });
    } catch (error) {
      this.setState({ error });
    }
  }

  async signOut() {
    try {
      await GoogleSignin.signOut()
      this.setState({ user: null, error: null });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { user, error } = this.state;
    const signInButton = (
      <GoogleSigninButton
        style={{ width: 312, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => this.signIn()}
      />);
    const signOutButton = (<TappableRow text="sign out" onPress={() => this.signOut()} />);
    const text = (user) ?
      `Signed in as: ${user.name} (${user.email})` :
      ((error) ? error : 'Sign in with Google');

    return (
      <ScrollView style={styles.scrollView}>
        <Text style={styles.row}>
          {text}
        </Text>
        {user ? null : signInButton}
        {user ? signOutButton : null}
      </ScrollView>
    );
  }

}