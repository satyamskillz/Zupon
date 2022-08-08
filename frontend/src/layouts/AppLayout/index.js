import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header/index';
// import styles from './styles'

function AppLayout(props) {
    return (
        <View>
            {/* header */}
            <View><Text>header</Text></View>

            {/* app content */}
            <View>{props.children}</View>

            {/* footer */}
            <View><Text>footer</Text></View>
        </View >
    );
}


export default AppLayout
    ;