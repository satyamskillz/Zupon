import React from 'react';
import { Text } from 'react-native';
import { View, StyleSheet } from 'react-native';
import PrimaryBtn from '../../../components/buttons/Primary';
import colors from '../../../constants/colors';

function ViewCouponCard(props) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.rectangle}>{props.first}</View>
                <View style={styles.rectangle}>{props.second}</View>
                <View style={styles.rectangle}>{props.third}</View>
            </View>

            <View style={styles.footer}>
                <View style={styles.remind}>
                </View>
                <View style={styles.btn}>
                    <PrimaryBtn title='Add Coupon' />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    rectangle: {
        height: 64,
        margin: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: colors.black,
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 25
    },
    remind: {
        height: 64,
        width: 64,
        backgroundColor: colors.light,
        borderRadius: 8,
    },
    btn: {
        width: "90%",
    }

})

export default ViewCouponCard;