import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { login, logout, error as loginError } from '../../actions/user';
import TappableRow from '../common/TappableRow'
import styles from '../common/styles';
// import { HELLO } from 'react-native-dotenv'

class Login extends Component {

  async componentDidMount() {
    const { dispatch } = this.props;
    try {
      const configured = await GoogleSignin.configure({});
      if (configured) {
        const user = await GoogleSignin.currentUserAsync();
        dispatch(login(user));
      }
    } catch (error) {
      dispatch(loginError(error));
    }
  }

  async signIn() {
    const { dispatch } = this.props;
    try {
      const user = await GoogleSignin.signIn()
      dispatch(login(user));
    } catch (error) {
      dispatch(loginError(error));
    }
  }

  async signOut() {
    const { dispatch } = this.props;
    try {
      await GoogleSignin.signOut()
      dispatch(logout());
    } catch (error) {
      dispatch(loginError(error));
    }
  }

  render() {
    const { user, error } = this.props;
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


export default connect(({user: state}) => {
  return {
    user: state.user,
    error: state.error
  };
})(Login);
