import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Create from '../components/Create';
import Profile from '../components/Profile';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator()

const TabNavigation = ()=>{
    return(
        <Tab.Navigator tabBar = {(props) => <TabBar {...props}/>}>
            <Tab.Screen name = 'Home' component={Home} initialParams={{a: 'home'}}/>
            <Tab.Screen name = 'Create' component={Create} initialParams={{a: 'plus'}}/>
            <Tab.Screen name = 'Profile' component={Profile} initialParams={{a: 'ranuserdom'}}/>
        </Tab.Navigator>  
    )
}

const styles = StyleSheet.create({

})

export default TabNavigation