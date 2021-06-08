import React from 'react';
import {Text, Button, View } from 'react-native';
//import {css} from '../assets/css/Css'

export default function Home(props)
{
    console.log(props)
    return (
    <View>
        <Text>Componete Home</Text>
        <Button title = 'Ir para Login' onPress={()=>props.navigation.navigate('Login')}/>
        <Button title = 'Sobre o APP' onPress={()=>props.navigation.navigate('Sobre')}/>
        <Button title = 'Cadastro' onPress={()=>props.navigation.navigate('Cadastro')}/>      
    </View>

    );

}