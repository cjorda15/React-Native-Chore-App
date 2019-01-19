import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { initStore } from './redux/store';
import Home from './components/Home';
import socket from './websocket';
const store = initStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.socket = socket;
  }

  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Route exact path="/" component={Home} />
        </NativeRouter>
      </Provider>
    );
  }
}
