/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'

const App: () => React$Node = () => {
  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"} />
      <StartGameScreen title={"Start a new game!!"}>
      </StartGameScreen>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;
