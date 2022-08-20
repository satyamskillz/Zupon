import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import colors from '../../constants/colors'

function Header(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menu}>
                <Image style={styles.menuImage} source={require("../../../assets/menu.png")} />
            </TouchableOpacity>

            <Text style={styles.heading}>ZUPON</Text>

            <TouchableOpacity style={styles.user}>
                <Image source={require('../../../assets/user.png')} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        height: 80,
    },
    element: {
        backgroundColor: colors.white,
        padding: 20,
        width: "30%",
        textAlign: "center",
        fontFamily: "Inter-Regular"
    },
    heading: {
        fontSize: 40,
        fontFamily: "Inter-Black",
        color: colors.white,
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