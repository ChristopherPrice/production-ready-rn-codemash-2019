import React from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet } from 'react-native';

export default class LoginScreen extends React.Component {
  state = {
    isLoggedIn: false,
    username: ''
  };
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onSubmitEditing={() => {}}
          onChangeText={(text) => {this.handleUsernameChange(text)}}
          placeholder="Username"
          value={this.state.username}
        />
        <Button 
          onPress={() => {this.handlePress()}}
          title="Login"
        />
        <Text style={styles.loginStatus}>{this.state.isLoggedIn ? `You are logged in as ${this.state.username}` : 'You are not currently logged in.'}</Text>
      </View>
    );
  }

  handlePress() {
    if (this.state.username.length > 3) {
      this.setState({
        isLoggedIn: true
      });
    }
  }

  handleUsernameChange(text) {
    this.setState({
      username: text
    });
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  loginStatus: {
    marginTop: 30,
  },
});