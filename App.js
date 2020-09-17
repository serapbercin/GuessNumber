/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Alert
} from 'react-native';


import * as Font from 'expo-font';
import { AppLoading } from 'expo';



import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

const App: () => React$Node = () => {

  const [userNumber, setUserNumber] = useState()
  const [guessRound, setGuessRound] = useState(0)

  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {

    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() =>{
          setDataLoaded(true)
        }
        }
        onError={(err) => { 
          console.log(err)}
        }
      />
    );
  }


  const configureNewGameHandler = () => {
    setGuessRound(0)
    setUserNumber(null)
  }
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRound(0)
  }

  const gameOverHandler = numberOfRounds => {
    setGuessRound(numberOfRounds)
  }

  let content = <StartGameScreen title={"Start a New Game"} onStartGame={startGameHandler} />

  if (userNumber && guessRound <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}></GameScreen>
  } else if (guessRound > 0) {
    content = <GameOverScreen roundsNumber={guessRound} userNumber={userNumber} onRestart={configureNewGameHandler}></GameOverScreen>
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;
