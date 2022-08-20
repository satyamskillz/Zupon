import React from 'react';
import { Text } from 'react-native';
import AppLayout from './src/layouts/AppLayout';
import AddCouponCard from './src/layouts/CardLayout/AddCoupon';
import ViewCouponCard from './src/layouts/CardLayout/ViewCoupon';
import HomeScreen from './src/screens/Home';
import LandingScreen from './src/screens/Landing';

function App(props) {

    return (
        <ViewCouponCard />
    );
}
export default App;