/*
import {AppRegistry,Text} from 'react-native';
import App from './App';


const App=()=>
(
    <Text>Welcome To MicroFincance App</Text>
);

AppRegistry.registerComponent('MicroFincance', () => App);
*/
// Import library to help create a content

import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';
import Login from './src/components/Login/Login';
import { LoginForm } from './src/components/Login/LoginForm';



//Create a component
//To create a componenet we'll write a javascript function
const App=()=>
(   
    <Login/>
    
);
//Render it to the device
AppRegistry.registerComponent('MicroFinance',()=> App);


