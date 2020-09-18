
import React from 'react';

import {
    View,
    StyleSheet,
    Platform
} from 'react-native';

import Colors from '../constants/colors';
import TitleText from '../components/TitleText';

const Header = props => {
    return (
        <View style={{
            ...styles.headerBase,
            ...Platform.select({
                ios: styles.headerIOS,
                android: styles.headerAndroid
            })
        }}>
            <TitleText style={styles.title}>{props.title}</TitleText>
        </View>
    );
}

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIOS: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        backgroundColor: 'white',
    },
    headerAndroid: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
        backgroundColor: Colors.primary,
    },
    title: {
        color: Platform.OS == 'android' ? 'white' : Colors.primary
    }
})


export default Header;