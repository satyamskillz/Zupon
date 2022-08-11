import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../constants/colors'

function Header(props) {
    return (
        <View style={styles.container}>
            <Text>Zupon</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "space-between",

    },
    text: {
        margin: 15,
    },
    title: {
        fontSize: 50,
        color: colors.primary,
    }
})

export default Header;