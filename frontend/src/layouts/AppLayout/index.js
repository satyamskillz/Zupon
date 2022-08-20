import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import Hexagon from '../../components/Hexagon'
import HomeScreen from '../../screens/Home';

function AppLayout(props) {
    return (
        <View style={{ position: "relative", height: "100%" }}>
            <HomeScreen />
            <TouchableOpacity style={{ position: "absolute", bottom: 20, left: "37%", opacity: .5 }}>
                <Hexagon text={"+"} />
            </TouchableOpacity>
        </View>
    );
}

export default AppLayout;