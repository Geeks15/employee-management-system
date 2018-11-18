import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import communications from 'react-native-communications';
import _ from 'lodash';
import { Card, CardSection, Input, Button, Confirm } from './common';
import { employeeUpdate, updateEmployeeInfo, employeeDelete } from '../actions';


class EditEmployee extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.selectedEmployee, (value, prop) => {
          this.props.employeeUpdate({ prop, value });
        });
      }
      onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.updateEmployeeInfo({ name, phone, shift, uid: this.props.selectedEmployee.uid });
       }

       onTextPress() {
        const { phone, shift } = this.props.selectedEmployee;
    
        communications.text(phone, `Your upcoming shift is on ${shift}`);
      }
    
      onAccept() {
        const { uid } = this.props.selectedEmployee;
    
        this.props.employeeDelete({ uid });
      }
    
      onDecline() {
        this.setState({ showModal: false });
      }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#007aff' }}>
                
                <Card>
                <CardSection>
                    <Input
                    label="Name"
                    placeholder="Amir"
                    value={this.props.name}
                    onChangeText={(value) => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                <Input
                    label="Phone"
                    placeholder="9000900090"
                    value={this.props.phone}
                    onChangeText={(value) => this.props.employeeUpdate({ prop: 'phone', value })}
                />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker 
                        selectedValue={this.props.shift}
                        onValueChange={value => 
                            this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
                <CardSection>
                            <Button buttonText="Save" onPress={this.onButtonPress.bind(this)} />
                </CardSection>  
                </Card>
                <Card>
                <CardSection>
                     <Button onPress={() => this.setState({ showModal: !this.state.showModal })} buttonText=" Fire Employee" />
                
                </CardSection>  
                <CardSection>
                            <Button buttonText="Text Sift" onPress={this.onTextPress.bind(this)} />
                </CardSection> 
           
                <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
                >  
         Are you sure you want to delete this?
        </Confirm>            
                

            </Card>
            </View>
        );
    }
}
const styles = {
    pickerTextStyle: {
      fontSize: 18,
      paddingLeft: 20,
      color: '#007aff',
      paddingTop: 15
    }
  };
const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;
    return { name, phone, shift };
};
export default connect(mapStateToProps, 
    { employeeUpdate, updateEmployeeInfo, employeeDelete })(EditEmployee);

