import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#76a6ef'
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    }
})