import { View, Text, StyleSheet, TouchableOpacity, Image, PermissionsAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initials } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import colors from "../../constants/colors";
import { SvgXml } from "react-native-svg";
import { MaterialIcon } from "../Icons";
import { useSelector } from "react-redux";
import store from "../../store";

import SmsAndroid from "react-native-get-sms-android";

var filter = {
	box: "", // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
};

function Header({ isBackAvailable, handleBack }) {
	const { authData } = useSelector((state) => state.auth);

	const handleLogout = async () => {
		try {
			await AsyncStorage.removeItem("@authData");
			store.dispatch({ type: "LOGOUT" });
		} catch (error) {
			console.log("Error logging out:", error);
		}
	};

	const onPress = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.READ_SMS
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				// Permission granted, you can read SMS

				SmsAndroid.list(
					JSON.stringify(filter),
					(err) => {
						console.log("Error:", err);
					},
					(count, smsList) => {
						console.log(count);
						console.log(smsList);
					}
				);
			} else {
				// Permission denied
			}
		} catch (error) {
			console.warn("SMS permission request failed:", error);
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
				onPress={onPress}
				activeOpacity={0.8}
				style={styles.rightBtn}
				underlayColor={colors.light900}
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
