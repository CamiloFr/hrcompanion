import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import InitialScreen from './screens/Login';
import Register from './screens/Register';
import ScreenForm from './screens/ScreenForm';
import RRHH from './screens/RRHH'

// Functions

const Stack = createStackNavigator();

// App

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={InitialScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeScreen" component={ScreenForm} />
        <Stack.Screen name="RRHH" component={RRHH} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// StyleSheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
