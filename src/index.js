import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import '../node_modules/grommet-css'
import './style.scss';
//import 'grommet/scss/vanilla/index.scss';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'

var config={
    apiKey: "AIzaSC1Oz0PdzEXW0I-sj0Dm49thH6abW24",
    authDomain: "mytodoappgrommet.firebaseapp.com",
    databaseURL: "https://mytodoappgrommet.firebaseio.com",
    projectId: "mytodoappgrommet",
    storageBucket: "mytodoappgrommet.appspot.com",
    messagingSenderId: "530810064014"
  };



firebase.initializeApp(config)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
