import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ headerText }) => (
        <View style={styles.ViewStyle}><Text style={styles.textStyle}>{headerText}</Text></View>
    );
const styles = {
    textStyle: {
        fontSize: 20,
    },
    ViewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContect: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
};
export { Header };
