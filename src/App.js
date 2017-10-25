import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import RouterApp from './Route';

export class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDRhEAvIcHGLWky8qVu7Sjwszrszp-tdbM',
            authDomain: 'mydompet-24b1c.firebaseapp.com',
            databaseURL: 'https://mydompet-24b1c.firebaseio.com',
            projectId: 'mydompet-24b1c',
            storageBucket: 'mydompet-24b1c.appspot.com',
            messagingSenderId: '876049340684'
          };
          firebase.initializeApp(config);  

          firebase.auth().onAuthStateChanged((user) => { //AutoLogin
              if (user) {
                Actions.drawer();
              } else {
                Actions.mainForm();
              }
              console.log(user);
          });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            {/* {} => untuk menyimpan array username, Spinner, password dll 
                applyMiddleThunk => sebagai alat penengah/penyambung antara firebase dengan Action
            */}
                <RouterApp />
            </Provider>
        );
    }
}
