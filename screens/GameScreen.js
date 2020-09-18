import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, Text, Alert, FlatList, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
// check  documentations for icon and Material Icons 

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import DefaultStyles from '../constants/default-styles'
import MainButton from '../components/MainButton'
import BodyText from '../components/BodyText'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const randomNumber = Math.floor(Math.random() * (max - min)) + min

    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return randomNumber
    }
}

const renderListItem = (listLength, itemData) => {
    return <View style={styles.listItem}>
        <BodyText>#{listLength - itemData.index}</BodyText>
        <BodyText> {itemData.item}</BodyText>
    </View>
}

const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()])

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const { userChoice, onGameOver } = props

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(pastGuesses.length)
        }
    }, [currentGuess, userChoice, onGameOver])



    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t lie!', "you know that this is wrong....", [{ text: 'Sorry', style: 'cancel' }])
            return
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess + 1
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        // setRounds(currondRounds => currondRounds + 1)
        setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses]);
    }

    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width)
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height)

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width)
            setAvailableDeviceHeight(Dimensions.get('window').height)
        }

        Dimensions.addEventListener('change', updateLayout)

        return () => {
            Dimensions.removeEventListener('change', updateLayout)
        }
    })


    let listContainerStyles = styles.listContainer
    if (availableDeviceWidth < 350) { //added that just to get rid of if-else in the style section
        listContainerStyles = styles.listContainerBig
    }

    if (availableDeviceHeight < 500) {
        return <View style={styles.screen}>
            <Text style={DefaultStyles.bodyText}>
                Opponent's Guess
        </Text>
            <View style={styles.controls}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name="md-remove" size={24} color='white' />
                </MainButton>

                <NumberContainer>
                    {currentGuess}
                </NumberContainer>

                <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name="md-add" size={24} color='white' />
                </MainButton>
            </View>
            <View style={listContainerStyles}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
            </ScrollView> */}
                <FlatList keyExtractor={(item) => item} data={pastGuesses} renderItem={renderListItem.bind(this, pastGuesses.length)}
                    contentContainerStyle={styles.list} >
                </FlatList>
            </View>
        </View>
    }

    return (<View style={styles.screen}>
        <Text style={DefaultStyles.bodyText}>
            Opponent's Guess
        </Text>
        <NumberContainer>
            {currentGuess}
        </NumberContainer>
        <Card style={styles.buttonContainer}>

            <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Ionicons name="md-remove" size={24} color='white' />
            </MainButton>

            <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
                <Ionicons name="md-add" size={24} color='white' />
            </MainButton>

        </Card>
        <View style={listContainerStyles}>
            {/* <ScrollView contentContainerStyle={styles.list}>
                {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
            </ScrollView> */}
            <FlatList keyExtractor={(item) => item} data={pastGuesses} renderItem={renderListItem.bind(this, pastGuesses.length)}
                contentContainerStyle={styles.list} >
            </FlatList>
        </View>
    </View>);
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
        width: 400,
        maxWidth: '90%'
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        alignItems: 'center'
    },
    listContainer: {
        flex: 1,
        // flex is added otherwise list item can not be scrolable
        width: '60%'
    },
    listContainerBig: {
        flex: 1,
        // flex is added otherwise list item can not be scrolable
        width: '80%'
    },
    list: {
        flexGrow: 1,
        justifyContent: 'flex-end'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
})


export default GameScreen;