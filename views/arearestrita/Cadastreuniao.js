import React, { useEffect } from 'react';
import {Text, Button, View, TextInput } from 'react-native';
import { useState } from 'react/cjs/react.development';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Cadastreuniao(){
    const [assunto,setAssunto] = useState('')
    const [datareuniao,setDatareuniao] = useState('')
    const [hora,setHora] = useState('')
    const [nome,setName] = useState('')
    const [id,setId] = useState('')
    const [info,setInfo] = useState('')

    useEffect(()=>{
      async function getUser()
      {
        let resData = await AsyncStorage.getItem('userData')
        let json = JSON.parse(resData)
        setName(json.name)
        setId(json.id)
      }
      getUser()
    },[])

    async function Assuntoreuniao(){
        let response = await fetch('http://localhost:3000/cadasreuniao',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userId: id,
              nome: nome,
              assunto: assunto,
              datareuniao: datareuniao,
              hora: hora
            })
    })
    let json = await response.json()
    if(json === 'accept')
    {
      setInfo('Reunião criada com sucesso')
    }
    else
    {
      setInfo('Já existe uma renião nessa mesma data e hora')
    }
  }
    return(
        <View>
          <View>
            <Text>{info}</Text>
          </View>
          <View>
            <TextInput placeholder = 'Assunto da reunião' onChangeText={(text)=>setAssunto(text)}></TextInput>
            <TextInput placeholder = 'Dia/Mês/Ano' onChangeText={(text)=>setDatareuniao(text)}></TextInput>
            <TextInput placeholder = 'Horario da reunião: --:--' onChangeText = {(text)=>setHora(text)}/>
            <Button title = 'Nova Reunião' onPress={()=>Assuntoreuniao()}/>
          </View>
        </View>
        )
}
