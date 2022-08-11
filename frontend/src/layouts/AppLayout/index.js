import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header'
import Hexagon from '../../components/Hexagon'
// import styles from './styles'

function AppLayout(props) {
    return (
        <View>
            <View><Text>Some text</Text></View>

            <View>{props.children}</View>

            <View> <Hexagon /> </View>
        </View>
    );
}


export default AppLayout
    ;