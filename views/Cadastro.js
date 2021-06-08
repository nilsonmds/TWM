import React from 'react';
import {KeyboardAvoidingView, Text, TextInput, Button, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { css } from '../assets/css/Css';

export default function Cadastro()
{
    const [primeiroNome,setPrimeironome] = useState('')
    const [segundoNome,setSegundonome] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confPassword,setConfPassword] = useState('')
    const [condom,setCondom] = useState('')
    const [info,setInfo] = useState('')

    async function sendForm (){
        if(password == confPassword){
            let response = await fetch('http://localhost:3000/newuser',{
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  nome: primeiroNome,
                  sobrenome: segundoNome,
                  email: email,
                  password: password,
                  condominio: condom
                })
    
            })
            let json = await response.json()
            if (json === 'accept'){
                setInfo('Usuario Criado com sucesso')
            }
            else{
                setInfo('Email já existe')
                
            }
            
        }
        else{
            setInfo('Senhas diferentes')

        }
    }
    return (
        <KeyboardAvoidingView style = {css.container}>
    <View>
        <Text>Cadastro de novo Usuário</Text>
    </View>
    <View style = {css.container}>
        <View>
            <Text>{info}</Text>
        </View>
        <TextInput placeholder = 'Primeiro nome' onChangeText = {(text)=> setPrimeironome(text)}/>
        <TextInput placeholder = 'Segundo nome' onChangeText = {(text)=> setSegundonome(text)}/>
        <TextInput placeholder = 'Email' onChangeText = {(text) => setEmail(text)} />
        <TextInput placeholder = 'Condominio' onChangeText = {(text) => setCondom(text)} />
        <TextInput placeholder = 'Senha' secureTextEntry = {true} onChangeText = {(text)=>setPassword(text)}/>
        <TextInput placeholder = 'Confirmar senha' secureTextEntry = {true} onChangeText = {(text)=>setConfPassword(text)}/>
        <Button title = 'Cadastrar' onPress = {()=>sendForm()}/>
            
    </View>
       </KeyboardAvoidingView>

    );

}