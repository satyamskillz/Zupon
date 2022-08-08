import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import LandingScreen from './src/screens/landing/index';

const Stack = createNativeStackNavigator();

function App(props) {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                {/* <Stack.Screen name="landing" component={LandingScreen} /> */}
                <Stack.Screen name="home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;