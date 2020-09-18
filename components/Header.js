
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
        <View style={styles.header}>
            <TitleText style={styles.title}>{props.title}</TitleText>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        padding: 24,
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: Platform.OS == 'android' ? 'transparent' : '#ccc',
        borderBottomWidth: Platform.OS == 'android' ? 0 : 1
    },
    title: {
        color: Platform.OS == 'android' ? 'white' : Colors.primary
    }
})


export default Header;