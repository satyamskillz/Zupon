import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { initials } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { SvgXml } from "react-native-svg";
import { useSelector } from "react-redux";
import { MaterialIcon } from "../Icons";

import colors from "../../constants/colors";
import store from "../../store";

function Header({ isBackAvailable, handleBack }) {
	const { authData } = useSelector((state) => state.user);
	const navigation = useNavigation();

	const handleLogout = async () => {
		try {
			await AsyncStorage.removeItem("@authData");
			store.dispatch({ type: "LOGOUT" });
		} catch (error) {
			console.log("Error logging out:", error);
		}
	};

	return (
		<View style={styles.container}>
			{isBackAvailable ? (
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={handleBack}
					style={styles.leftBtn}
					underlayColor={colors.light900}
				>
					<MaterialIcon size="xlarge" name="arrow-back" color="black" />
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					activeOpacity={0.8}
					style={styles.leftBtn}
					onPress={handleLogout}
					underlayColor={colors.light900}
				>
					<MaterialIcon size="xlarge" name="menu" color="black" />
				</TouchableOpacity>
			)}
			<View style={styles.logoCtn}>
				<Text style={styles.logoText}>ZUPON</Text>
			</View>
			<TouchableOpacity
				activeOpacity={0.8}
				style={styles.rightBtn}
				underlayColor={colors.light900}
				onPress={() => navigation.navigate("Permission")}
			>
				{authData?.user?.photo ? (
					<GoogleIcon source={authData?.user?.photo} />
				) : (
					<UserAvatar name={authData?.user?.name} />
				)}
			</TouchableOpacity>
		</View>
	);
}

const GoogleIcon = ({ source }) => <Image style={styles.avatar} source={{ uri: source }} />;

const UserAvatar = ({ name }) => {
	const avatar = createAvatar(initials, {
		backgroundColor: ["000000"],
		fontWeight: 500,
		fontSize: 45,
		seed: name,
		chars: 1,
	}).toString();

	return <SvgXml style={styles.avatar} xml={avatar} />;
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		paddingVertical: 12,
		borderBottomWidth: 1,
		flexDirection: "row",
		paddingHorizontal: 16,
		backgroundColor: colors.light900,
		borderBottomColor: colors.light700,
	},
	menuIcon: {
		width: 30,
		height: 30,
	},
	avatar: {
		width: "100%",
		height: "100%",
	},
	leftBtn: {
		width: 32,
		height: 32,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	logoCtn: {
		flex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	logoText: {
		fontSize: 24,
		fontWeight: 900,
		color: colors.dark900,
	},
	rightBtn: {
		width: 32,
		height: 32,
		borderWidth: 1,
		display: "flex",
		borderRadius: 21,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
		borderColor: colors.light700,
	},
});

export default Header;
