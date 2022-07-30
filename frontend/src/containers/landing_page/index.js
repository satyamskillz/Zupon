import React from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native';
function index(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.appName}>Zupon</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F2C84A",
        height: "100%"
    },
    header: {
        height: "70%",
    },
    appName: {
        fontSize: 52,
        color: "#fff",
        textAlign: "center",
    },

})
export default index;