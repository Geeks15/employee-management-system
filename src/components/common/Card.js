import React from 'react';
import { View } from 'react-native';

const Card = (props) => <View style={styles.containerStyle}>{props.children}</View>;

const styles = {
    containerStyle: {
        borderWidth: 0,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#fff',
        marginTop: 10
     }
};

export { Card };
