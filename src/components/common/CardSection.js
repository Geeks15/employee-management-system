import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => 
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>;

const styles = {
    containerStyle: {
        borderBottomWidth: 0,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 10
    }
}; 
export { CardSection };
