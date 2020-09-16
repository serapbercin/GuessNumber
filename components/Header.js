
import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import Colors from '../constants/colors';


const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        padding: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        width: '100%',
        height: 90,
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: "center"
    }
})


export default Header;