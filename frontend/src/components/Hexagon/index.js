import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

function Hexagon(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text ? props.text : ""}</Text>
            {/* <View>
                subText && <Text style={styles.subText}>{props.subText}</Text>
            </View> */}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        borderColor: colors.primary,
        backgroundColor: colors.primary,
        borderWidth: 5,
        margin: 15,
        height: 70,
        width: 70,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    subText: {
        color: colors.black,
        fontSize: 24,
    },
    text: {
        fontSize: 46,
    }
})

export default Hexagon;