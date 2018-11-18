import firebase from 'firebase';
//import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER, 
    LOGIN_USER_FAIL, 
    LOGIN_USER_SUCCESS } from './types';


export const emailChanged = (text) => ({
        type: EMAIL_CHANGED,
        payload: text
    });

 export const passwordChanged = (text) => ({
        type: PASSWORD_CHANGED,
        payload: text
    });

    export const loginUser = ({ email, password }) => (dispatch) => {
          dispatch({ type: LOGIN_USER });
          firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
              console.log(error);
      
              firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginUserSuccess(dispatch, user))
                .catch(() => loginUserFail(dispatch));
            });
        // axios({
        //     method: 'post',
        //     url: 'http://13.233.110.20/users/login',
        //     data: { username: email, password },
        //     config: { headers: { 'Content-Type': 'application/json' } }
        //     })
        //     .then((response) => {
        //         //handle success
        //         console.log(response);
        //     })
        //     .catch((response) => {
        //         //handle error
        //         console.log(response);
        //     });
    };

        const loginUserFail = (dispatch) => {
            dispatch({ type: LOGIN_USER_FAIL });
            };
          
          const loginUserSuccess = (dispatch, user) => {
            dispatch({
              type: LOGIN_USER_SUCCESS,
              payload: user
            });
            Actions.Main();
          };
