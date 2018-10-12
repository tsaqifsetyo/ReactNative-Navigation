/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Judul from './Components/Judul';
import Biodata from './Components/Biodata';
import {
  Platform,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import Login from './Components/Login';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Biodata dinamis='Biodata'/>
        <Biodata dinamis='Siswa'/>
        <Text>==============================</Text>
        <Text style={styles.welcome}>Nama : Tsaqif Setyo Abdulhaqqi</Text>
        <Text style={styles.welcome}>Kelas : XI RPL 1</Text>
        <Text style={styles.welcome}>Absen : 37</Text>
        <Text>==============================</Text>
      <Image
        style={{width: 250, height: 250}}
        source={require('./images/foto.jpg')}
      />
      <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'left',
  color: 'purple',
    margin: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});