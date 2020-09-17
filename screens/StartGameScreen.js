import React, { useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
//function methos

const StartGameScreen = props => {
    //what we want to render, how should it look like?

    const [enteredValue, setEnteredValue] = useState('');

    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();


    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 0-99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss()
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput =
            <Card style={styles.summaryContainer}>
                <BodyText>You selected</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="Start Game" onPress={() => props.onStartGame(selectedNumber)}></Button>
            </Card>

    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.headerTitle}>{props.title}</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.title}>Select the number</Text>
                    <Input style={styles.input} blurOnSubmit autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    >

                    </Input>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonStyle}>
                            <Button title="Reset" onPress={
                                resetInputHandler
                            } color={Colors.primary} />
                        </View>

                        <View>
                            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.accent} />

                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View >
        </TouchableWithoutFeedback>);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    headerTitle: {
        color: 'black',
        width: '100%',
        height: 90,
        fontSize: 24,
        textAlign: "center",
        fontFamily: 'open-sans-bold'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: '300%',
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    buttonStyle: {
        width: 100
    },
    input: {
        width: 70,
        textAlign: "center"
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
})


export default StartGameScreen;