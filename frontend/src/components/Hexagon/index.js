import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

function Hexagon(props) {
    return (
        <View style={styles.flex}>

            <View style={styles.flex}>

                <View style={styles.container}></View>


            </View>
            <View style={[styles.corner, styles.corner1]}></View>
            <View style={[styles.corner, styles.corner2]}></View>
            <View style={[styles.corner, styles.corner3]}></View>
            <View style={[styles.corner, styles.corner4]}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: colors.primary,
        backgroundColor: colors.primary,
        borderWidth: 5,
        margin: 25,
        height: 100,
        width: 100,
    },
    corner: {
        borderColor: colors.black,
        backgroundColor: colors.black,
        borderWidth: 5,
        margin: 25,
        height: 100,
        width: 100,
        position: "absolute",
    },
    corner1: {

    },
    flex: {
        position: "relative",
    }
})

export default Hexagon;