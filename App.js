import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';

// Screens
import InitialScreen from './screens/Login';
import Register from './screens/Register';
import ScreenForm from './screens/ScreenForm';
import Curriculum from './screens/RRHH';
import Hoteles from './screens/Hotels';

const Stack = createStackNavigator();

export default function App() {

  console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    <Provider
      store={createStore(Reducers)}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={InitialScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="HomeScreen" component={ScreenForm} />
          <Stack.Screen name="Curriculum" component={Curriculum} />
          <Stack.Screen name="Hotels" component={Hoteles} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
