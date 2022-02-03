import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import {FirebaseContext} from "./store/Context";
import Context  from "./store/Context";
import firebase from './firebase/config';

ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
    <Context>
    <App />
    </Context>
</FirebaseContext.Provider>
, document.getElementById('root'));
