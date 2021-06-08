import React from 'react';
import {Text, Button, View } from 'react-native';
import {css} from '../../assets/css/Css'

export default function AcessoRestrito({navigation})
{
    return (
    <View>
        <View style = {css.container}>
            <Button title = 'Reunioes' onPress = {()=>navigation.navigate('Reunioes')}/>
        </View>
    </View>

    );

}