import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Tab({color, tab, onPress, icon}) {
    return (
        <TouchableOpacity style={styles.container}>
            <AntDesign name="home" size={20} color={color}  onPress={onPress}/>
            <Text style={color}>{tab.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        padding: 5
    }
})
