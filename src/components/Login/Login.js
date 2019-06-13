import React, { Component } from 'react';
import { StyleSheet, View,Image,Text,KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import Header from '../header';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logocontainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../../../assets/Images/microfinance.jpg')}/>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
                
            </KeyboardAvoidingView>
            
        );
    }
}

const styles=StyleSheet.create(
    {
        container:{
            //backgroundColor:'#f0f8ff'
        },
        logocontainer:{
            alignItems:'center',
            flexGrow:1,
            justifyContent:'center'
        },
        logo:{
            width:400,
            height:400
        },
        formContainer:{
            //backgroundColor:'#f0f8ff'
        }
    }
);
