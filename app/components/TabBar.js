import React,{useState} from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Tab from './Tab';

const {width} = Dimensions.get('screen')
export default function TabBar({state, navigation}) {
    const [selected, setSelected] = useState('Home');
    const {routes} = state; 
    const renderColor = (currentTab) => currentTab == selected ? 'red': 'black';
    const handlePress = (activeTab,index) =>{
        setSelected(activeTab)
        if(state.index !== index){ 
        navigation.navigate(activeTab)
        }
    } 
    console.log(state.routes)
    return (
        <View style={styles.wrapper}> 
            <View style={styles.container}> 
            {routes.map((route, index) => ( 
             <Tab tab={route} 
                icon ={route.params.icon} 
                 onPress={() => handlePress(route.name, index)} 
                 color = {renderColor(route.name)}
                key={route.key}
             />
            ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        position:'absolute',
        bottom:20,
        width,
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        flexDirection:'row',
        backgroundColor:'#fff',
        width: 250,
        justifyContent:'space-between',
        borderRadius:100
    }
})
