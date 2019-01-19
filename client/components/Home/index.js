import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import socket from '../../websocket';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'chris' };
    this.socket = socket;
  }

  handleOnPress(message) {
    this.socket.emit('love', this.state.name);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Ahoy ahoy</Text>
        <TextInput
          onChangeText={input => {
            this.setState({ name: input });
          }}
          placeholder={'type here'}
          value={this.state.name}
        />
        <Button
          title="Click me friend"
          onPress={() => {
            this.handleOnPress('zip');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;
