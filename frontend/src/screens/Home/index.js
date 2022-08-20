import React, { useState } from "react";
import { View, FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from '../../constants/colors'
import Hexagon from '../../components/Hexagon'
import Header from '../../components/Header'
const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Coupon - 1",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Coupon - 2",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Coupon - 3",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d73",
        title: "Coupon - 4",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d74",
        title: "Coupon - 5",
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.couponTitle, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const HomeScreen = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? colors.green : colors.white;
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item style={styles.item}
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>

                <View style={styles.topBar}>
                    <Hexagon text={"1"} subText={"Available"} />
                    <Hexagon text={"2"} subText={"Used"} />
                    <Hexagon text={"3"} subText={"Expired"} />
                </View>

                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        display: "flex",
        justifyContent: "center",
        paddingHorizontal: 20,
        margin: 10,
        height: 100,
        borderRadius: 12,
    },
    couponTitle: {
        fontSize: 28,
        fontFamily: "Inter-Regular"
    },
    topBar: {
        backgroundColor: colors.white,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 32,
        paddingHorizontal: 20,
        margin: 10,
        marginTop: 15,
        borderRadius: 12,
        height: 180,
    }
});

export default HomeScreen;