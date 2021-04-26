import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Provider } from 'react-redux';
import store from './store'

// Screens
import Login from './screens/Login';
import Register from './screens/Register';
import AdministratorScreen from './screens/AdministratorScreen';
import Curriculum from './screens/Curriculum';
import Hoteles from './screens/Hotels';
import HotelPay from './screens/Hotelpay';
import Curriculum2 from './screens/Curriculum2';

const Session = createStackNavigator();
const RootScreens = createStackNavigator();
const ValidateSession = createDrawerNavigator();
const HotelScreens = createStackNavigator();

function HotelesScreens(){
  return(
    <HotelScreens.Navigator>
      <HotelScreens.Screen
        name="Hotels"
        component={Hoteles}
      ></HotelScreens.Screen>
      <HotelScreens.Screen
        name="HotelPay"
        component={HotelPay}
      ></HotelScreens.Screen>
    </HotelScreens.Navigator>
  )
}

export default class App extends React.Component {
  SessionScreen(){
    return(
      <Session.Navigator>
        <Session.Screen
          name="Home"
          component={Login}
          options={{title: 'Inicio de sesión', headerStyle: {backgroundColor: '#72AC98'}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' }}}
        ></Session.Screen>
        <Session.Screen
          name="Register"
          component={Register}
          options={{title: 'Registro', headerStyle: {backgroundColor: '#72AC98'}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' }}}
        ></Session.Screen>
      </Session.Navigator>
    )
  }
  SessionValid(){
    return(
      <ValidateSession.Navigator>
        <ValidateSession.Screen
          name="Curriculum" 
          component={Curriculum} 
        ></ValidateSession.Screen>
        <ValidateSession.Screen
          name="HomeScreen"
          component={AdministratorScreen}
        ></ValidateSession.Screen>
        <ValidateSession.Screen
          name="Hotels"
          component={HotelesScreens}
        ></ValidateSession.Screen>
        <ValidateSession.Screen
          name="Todas las hojas de vida"
          component={Curriculum2}
        ></ValidateSession.Screen>
      </ValidateSession.Navigator>
    )
  }
  render() {
    return(
      <Provider
        store={store}
      >
        <NavigationContainer>
          <RootScreens.Navigator
            mode="modal"
            headerMode="none"
          >
            <RootScreens.Screen
              name="Home"
              component={this.SessionScreen}
            ></RootScreens.Screen>
            <RootScreens.Screen
              name="Curriculum"
              component={this.SessionValid}
            ></RootScreens.Screen>
          </RootScreens.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}