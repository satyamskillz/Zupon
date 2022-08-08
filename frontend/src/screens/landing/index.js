import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import colors from '../../constants/colors'
import PrimaryBtn from '../../components/buttons/Primary';


function LandingScreen(props) {

    const handleClick = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerImg}>
                    <Image style={styles.image} source={require('../../../assets/Staggered.png')} />
                </View>
                <Text style={styles.appName}>ZUPON</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.company}>
                    <Image source={require("../../../assets/companies.png")} />
                </View>

                <View style={styles.form}>
                    <Text style={styles.formTitle}>Let us collect coupons for you</Text>
                    <PrimaryBtn title={"Continue With Google"} onClick={handleClick} />
                </View>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    appName: {
        fontSize: 64,
        color: "#fff",
        textAlign: "center",
        marginVertical: 32,
        fontWeight: "900",
        letterSpacing: 5,
        body: {

        }
    },
    body: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#fff",
        padding: 48,
        width: "100%",
    },
    company: {
        position: "absolute",
        top: -70,
        width: "100%",
    },
    container: {
        backgroundColor: "#F2C84A",
        height: "100%",
        position: "relative",
    },
    formBtn: {
        marginTop: 32,
        margin: 10,
        fontSize: 20,
    },
    formTitle: {
        marginBottom: 32,
        textAlign: "center",
        fontSize: 36,
        color: colors.black,
        fontWeight: "600",
    },
    header: {
        height: "70%",
    },

})
export default LandingScreen;