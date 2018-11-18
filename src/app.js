import React, {Component} from 'react';
import { View} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import { Actions } from 'react-native-router-flux';

class App extends Component{
    initializeFirebase() {
        const firebase = require("firebase");
      
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyAUozamEEdSUmzStzY4eBxDHS4uhzuUYSo",
            authDomain: "employee-management-67d27.firebaseapp.com",
            databaseURL: "https://employee-management-67d27.firebaseio.com",
            projectId: "employee-management-67d27",
            storageBucket: "employee-management-67d27.appspot.com",
            messagingSenderId: "519403530365"
          };
        firebase.initializeApp(config);
      
        //inicializando o firestore
        // const firestore = require("firebase/firestore");
        // db = firebase.firestore();
        // db.settings({ timestampsInSnapshots: true });
      }    
componentWillMount() {
  

    this.initializeFirebase();
    //Actions.refresh({ });
    }    
render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
    <Provider store={store}>
        {/* <View style={{backgroundColor:'#00aff0',flex:1}}>
            <Header headerText='Please Login'>
            </Header>
            <LoginForm />
        </View> */}
        <Router />
        </Provider>
        )
}};

const styles = {
    containerStyle : {
        
        justifyContent:'center',
        backgroundColor:'red',
        alignItem:'center',
        flexDirection: 'column',
       flex:1
        
      
   
        
    }
}

export default App;