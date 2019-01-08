import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Message extends React.Component {
  render() {
    const message = 'hello!';
    const isSecret = this.props.isASecret;

    return (
      <View style={styles.container}>
        <Text style={styles.message}>Here's a{isSecret ? ' secret ': ' '}message for you: {message}</Text>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5
  },
  message: {
    color: 'green',
  }
});