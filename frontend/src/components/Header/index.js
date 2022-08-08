import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

import colors from '../../constants/colors'

function Header(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hamburger</Text>
            <Text style={[styles.text, styles.title]}>Zupon</Text>
            <Text style={styles.text}>User icon</Text>
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