import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Message extends React.Component {
  render() {
    const message = 'hello!';
    const isAwesome = true;

    return (
      <View>
        <Text>Here's a message for you: {message} {isAwesome ? 'AWESOME' : 'NOT AWESOME' }</Text>
      </View>
    );
  }  
}
