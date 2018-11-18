import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => (
        <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {}}

        >
            <View style={styles.containerStyle}>           
                <CardSection style={styles.cardSectionStyle}>
                    <Text style={styles.textStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept} buttonText="Yes" />
                    <Button onPress={onDecline} buttonText="No" />
                </CardSection>
            </View> 
        </Modal>
    );

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};
export { Confirm };
