import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import { 
    CREATE_EMPLOYEE,
     FIREBASE_CREATE_EMPLOYEE, 
     FETCH_EMPLOYEES, 
     UPDATE_EMPLOYEE } from './types';


export const employeeUpdate = ({ prop, value }) => 
({ type: CREATE_EMPLOYEE, payload: { prop, value } });

export const createEmployee = ({ name, phone, shift }) => (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`).push({ name, phone, shift })
        .then(() => {
            dispatch({ type: FIREBASE_CREATE_EMPLOYEE });
            Actions.pop();
        });
    };
export const fetchEmployees = () => (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
        dispatch({ type: FETCH_EMPLOYEES, payload: snapshot.val() });
    });
};
export const updateEmployeeInfo = ({ name, phone, shift, uid }) => (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
        dispatch({ type: UPDATE_EMPLOYEE, paylod: { name, phone, shift } });
        Alert.alert('Changes Saved!!');
    });
};
export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
  
    return () => {
      firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => {
          Actions.employeeList({ type: 'reset' });
        });
    };
  };
