import React from 'react';
import { View, StyleSheet } from 'react-native';
import Hexagon from '../../../components/Hexagon';
import colors from '../../../constants/colors';

function AddCouponCard(props) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
            </View>
            <View style={styles.footer}>
                <Hexagon text={'-'} />
                <Hexagon text={'+'} />
                <Hexagon text={'#'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        color: colors.white,
    },
    card: {
        height: "40%",
        margin: 25,
        backgroundColor: colors.light,
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        padding: 20,
        height: 150,
    }
})

export default AddCouponCard;