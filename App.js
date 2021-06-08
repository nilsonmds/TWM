import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {css} from './assets/css/Css'
import {Home, Login, Sobre,Cadastro} from './views/index'
import {AcessoRestrito,Reunioes,Cadastreuniao} from './views/arearestrita/index'


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" options ={{headerShown:true}} component={Login} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="AcessoRestrito" component={AcessoRestrito}/>
        <Stack.Screen name="Reunioes" component={Reunioes}/>
        <Stack.Screen name="Cadastreuniao" component={Cadastreuniao}/>                             
      </Stack.Navigator>
    </NavigationContainer>
  );
}