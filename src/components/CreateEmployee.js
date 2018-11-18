import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate, createEmployee } from '../actions';

class CreateEmployee extends Component { 
    componentWillMount() {
        this.props.employeeUpdate({ prop: 'name', value: '' });
        this.props.employeeUpdate({ prop: 'phone', value: '' });
        this.props.employeeUpdate({ prop: 'shift', value: 'Monday' });
    }
    onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.createEmployee({ name, phone, shift });
   }
    render() { 
        return (
          <View style={{ backgroundColor: '#007aff', flex: 1 }}>
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
export default connect(mapStateToProps, { employeeUpdate, createEmployee })(CreateEmployee);
