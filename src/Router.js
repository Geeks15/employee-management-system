import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee'

const RouterComponent = () => (
        <Router>
            <Stack key="root" hideNavBar >
                <Scene key="Auth">
                    <Scene key="LoginForm" component={LoginForm} title="Please Login" initial />
                    </Scene>
                <Scene rightTitle="Add" key="Main" >
                    <Scene
                    onRight={() => Actions.CreateEmployee()}
                    rightTitle="Add"
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    initial
                    />
                    <Scene
                    key="CreateEmployee"
                    component={CreateEmployee}
                    title="Add Employee"
                    />
                    <Scene
                    key="EditEmployee"
                    component={EditEmployee}
                    title="Edit Employee"
                    />
                </Scene>
            </Stack>
        </Router>
        
    );
export default RouterComponent;
