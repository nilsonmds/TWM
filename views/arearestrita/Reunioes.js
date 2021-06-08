import React, { useEffect } from 'react';
import {Text, Button, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
//import {css} from '../assets/css/Css'


export default function AcessoRestrito(props)
{
    const [viewbox1,setBox1] = useState('')
    const [viewbox2,setBox2] = useState('')
    const [viewbox3,setBox3] = useState('')
    const [viewbox4,setBox4] = useState('')
    const [viewbox5,setBox5] = useState('')
    const [viewbox6,setBox6] = useState('')

    useEffect(()=>
    { async function viewboxs()
        {
            let response = await fetch('http://localhost:3000/reuniao',{
                method: 'GET'
            })
            let json = await response.json()
            let tamanho = json.length
            setBox6('Nome do morador que criou:  '+ json[tamanho-1]['nome']+ '\n' +
            'Assunto: ' + json[tamanho-1]['assunto'] + '\n' +
             'Horario:' + json[tamanho-1]['hora'] + '\n' + 
             'Data da reunião: ' + json[tamanho-1]['datareuniao'])
        }
        viewboxs()
    },[])


    return (
    <View>
        <View>
            <Text>{'\n'+ viewbox1}</Text>
        </View>
        <View>
            <Text>{'\n'+ viewbox2}</Text>
        </View>
        <View>
            <Text>{'\n'+ viewbox3}</Text>
        </View>
        <View>
            <Text>{'\n'+ viewbox4}</Text>
        </View>
        <View>
            <Text>{'\n' + viewbox5}</Text>
        </View>
        <View>
            <Text>{'\n' + viewbox6}</Text>
        </View>

        <View>
        <Button title = 'Criar nova reuniao' onPress={()=>props.navigation.navigate('Cadastreuniao')}/>
        </View>

    </View>
    )
}