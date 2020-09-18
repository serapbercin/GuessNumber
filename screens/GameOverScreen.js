import React from 'react'
import { View, StyleSheet, Image, Text, Dimensions, ScrollView } from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
    return (
        <ScrollView>
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
                    <BodyText style={styles.resultText}> your phone needed{' '}
                        <Text style={styles.highlight}>{props.roundsNumber}</Text>
                     rounds to guess the number{' '}
                        <Text style={styles.highlight}> {props.userNumber}</Text>
                    </BodyText>
                </View>

                <MainButton onPress={props.onRestart}>
                    NEW GAME
        </MainButton>
            </View>
        </ScrollView>)
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 20
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
        marginVertical: Dimensions.get('window').height / 40
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
})


export default GameOverScreen;

