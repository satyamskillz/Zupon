import React, { useState } from "react";
import { View, FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from '../../constants/colors'
import Hexagon from '../../components/Hexagon'
const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d73",
        title: "",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d74",
        title: "",
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const HomeScreen = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? colors.green : colors.white;
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <ScrollView>
                <Item style={styles.item}
                    item={item}
                    onPress={() => setSelectedId(item.id)}
                    backgroundColor={{ backgroundColor }}
                    textColor={{ color }}
                />
            </ScrollView>
        );
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.topBar}>
                <Hexagon text={""} subText={"Available"} />
                <Hexagon text={""} subText={"Used"} />
                <Hexagon text={""} subText={"Expired"} />
            </View>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        flex: .8,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    title: {
        fontSize: 28,
    },
    topBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    }
});

export default HomeScreen;