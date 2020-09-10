
import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';


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
        backgroundColor: '#f7287b',
        alignItems: 'center'
    },
    headerTitle: {
        color: 'black',
        width: '100%',
        height: 90
    }
})


export default Header