import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import TabNavigation from './app/navigation/TabNavigation';

export default function App() {
  return ( 
    <NavigationContainer>
     <TabNavigation/>
    </NavigationContainer>
  )
}

