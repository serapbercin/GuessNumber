import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

import Card from '../components/Card';

//function methos

const StartGameScreen = props => {
    //what we want to render, how should it look like?
    return (
        <View style={styles.screen}>
            <Text style={styles.headerTitle}>{props.title}</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.title}>Select the number</Text>
                <TextInput></TextInput>
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {

                    }} />
                    <Button title="Confirm" onPress={() => {

                    }} />
                </View>
            </Card>
        </View>);
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
        height: 90
    },
    title: {
        fontSize: 20,
        marginVertical: 10
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
    }
})


export default StartGameScreen;