import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
import { fetchEmployees } from '../actions/EmployeeAction';

const _ = require('lodash');

class EmployeeList extends Component {
    componentWillMount() {
        this.props.fetchEmployees();
    }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.employees}
          renderItem={({ item }) => 
          <TouchableOpacity 
          onPress={() => Actions.EditEmployee({ selectedEmployee: item })}
          >
              <CardSection style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.item}>{item.name}
                </Text>
            </CardSection>
        </TouchableOpacity>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
     backgroundColor: '#007aff'
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));
    return { employees };
};
  
export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);
