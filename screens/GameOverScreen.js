import React from 'react'
import { View, StyleSheet, Button, Image, Text } from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
    return (
    
    <View style={styles.screen}>

        <TitleText> Game is over</TitleText>

        <View style={styles.imageContainer}>
            <Image source={
                require('../assets/success.png') //loading images for local image
                // uri : 'imageUrl'
            }
                fadeDuration={1000}
                style={styles.image}
                resizeMode={"cover"}>
                {/* cover is default for resize image */}
            </Image>
        </View>

        <View style={styles.resultContainer}>
            <BodyText> your phone needed... <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number
        <Text style={styles.highlight}> {props.userNumber}</Text>
            </BodyText>
        </View>

        <MainButton onPress={props.onRestart}>
            NEW GAME
        </MainButton>
    </View>)
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: 15
    }
})


export default GameOverScreen;

