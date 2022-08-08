import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import Header from '../../components/Header';
import colors from '../../constants/colors';
import AppLayout from '../../layouts/AppLayout';


function HomeScreen(props) {
    return (
        <AppLayout>
            <Header />
        </AppLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        borderColor: "#000",
        borderWidth: 1,
    },
    hex: {
        color: colors.primary,
        fontSize: 256,
        fontWeight: "bold",
    },
    text: {
        position: "absolute",
        top: "50%",
        left: "50%",
        fontSize: 50,
    }
})
export default HomeScreen;