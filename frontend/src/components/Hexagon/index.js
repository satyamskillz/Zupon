import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

function Hexagon(props) {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>{props.text ? props.text : ""}</Text>
            </View>
            <Text style={styles.subText}>{props.subText}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 80,
        width: 80,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    subText: {
        fontSize: 16,
        fontFamily: "Inter-Medium",
        textAlign: "center",
        color: colors.black
    },
    text: {
        fontSize: 40,
        fontFamily: "Inter-Light"
    }
})

export default Hexagon;