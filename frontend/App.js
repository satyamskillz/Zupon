import React from 'react';
import HomeScreen from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function App(props) {
  // Check if the user is signed in or not
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={HomeScreen} />
        <Stack.Screen name="Settings" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
