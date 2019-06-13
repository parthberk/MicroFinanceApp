import React, { Component } from 'react';
import { StyleSheet, View,Image,Text,KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import Header from '../header';

export default class Login extends Component {
    render() {
        return (
            
            <View>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>MicroFinance</Text>
            </View>
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
            </View>
        );
    }
}

const styles=StyleSheet.create(
    {
        viewStyle:{
            backgroundColor:'#F8F8F8',
            justifyContent:'center',
            alignItems:'center',
            height:80,
            paddingTop:20,
            shadowColor:'#000000',
            shadowOffset:{width:0,height:3},
            shadowOpacity:0.4,
            elevation:2,
            position:'relative'
        },
        textStyle: {
            fontSize:30
        },
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
