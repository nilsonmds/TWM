import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState,useEffect} from 'react';
import {KeyboardAvoidingView, Text, TextInput, Button, View } from 'react-native';
import { css } from '../assets/css/Css';

export default function Login({navigation})
{
    const [usuario,setUsuario] = useState(null)
    const [email,setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [login, setLogin] = useState(null)
    // Envio do formulario de login
    async function sendForm()
    {
        let response = await fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email,
              password: password
            })

        })
        let json = await response.json()
        if (json === 'error'){
            setUsuario('Email ou senha incorreto')
            await AsyncStorage.clear() // Limpa o AsyncStorage
        }
        else{
            let userData = await AsyncStorage.setItem('userData',JSON.stringify(json))
            //let resData = await AsyncStorage.getItem('userData')
            //console.log(JSON.parse(resData))
            navigation.navigate('AcessoRestrito')

        }
    }

    return (
        <KeyboardAvoidingView style = {css.container}>
    <View>
        <Text>{usuario}</Text>
    </View>
    <View>
    </View>
    <View>
        <TextInput placeholder = 'Email' onChangeText={text=>setEmail(text)}/>
        <TextInput placeholder = 'Senha' secureTextEntry = {true} onChangeText = {text=>setPassword(text)} />
        <Button title = 'Entrar' onPress={()=>sendForm()}/>
            
    </View>
       </KeyboardAvoidingView>

    );

}