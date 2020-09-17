import React from 'react'
import { View, StyleSheet, Button, Image } from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

const GameOverScreen = props => {
    return (<View style={styles.screen}>

        <TitleText> Game is over</TitleText>
        <View style={styles.imageContainer}>
            <Image source={
                require('../assets/success.png') //loading images for local image
            } style={styles.image}
                resizeMode={"cover"}>
                {/* cover is default for resize image */}
            </Image>
        </View>

        <BodyText> Number of rounds: {props.roundsNumber}</BodyText>
        <BodyText> Number was: {props.userNumber}</BodyText>
        <Button title='NEW GAME' onPress={props.onRestart}></Button>
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
    }
})


export default GameOverScreen;

