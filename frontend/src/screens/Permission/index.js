import {
	Text,
	View,
	Platform,
	ScrollView,
	SafeAreaView,
	PermissionsAndroid,
	TouchableHighlight,
} from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { PERMISSIONS, request } from "react-native-permissions";
import SmsAndroid from "react-native-get-sms-android";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import colors from "../../constants/colors";
import store from "../../store";
import styles from "./styles";

// Env Variables
import { GOOGLE_WEB_ID, GOOGLE_ANDROID_ID } from "@env";

const list = [
	"First, you give us permission to read emails and phone sms.",
	"We collect all existing emails/sms and new emails/sms upon arrival.",
	"Our AI filters out emails/sms that contain sensitive information like bank details.",
	"Then, our AI goes through the remaining emails/sms and extracts coupons.",
	"Once the coupon is collected, its details are sent to our servers.",
	"We use coupon data to send reminders when the coupon is expiring.",
];

const webClientId = GOOGLE_WEB_ID;
const androidClientId = GOOGLE_ANDROID_ID;

var filter = { box: "" };

function PermissionScreen({ navigation }) {
	const [hasSmsPermission, setSmsPermission] = useState(false);
	const [isGmailConnected, setGmailConnected] = useState(false);
	const { permissions } = useSelector((state) => state.user);

	const onFinish = () => {
		store.dispatch({
			type: "SET_IS_NEW_USER",
			payload: false,
		});
		navigation.navigate("Dashboard");
	};

	const saveGmailData = async (metaData) => {
		store.dispatch({
			type: "SET_GMAIL_DATA",
			payload: metaData,
		});
	};

	const fetchAllSMS = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.READ_SMS
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				setSmsPermission(true);

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
				setSmsPermission(false);
			}
		} catch (error) {
			setSmsPermission(false);
		}
	};

	const connectGmail = async () => {
		try {
			await GoogleSignin.signIn().then((result) => {
				setGmailConnected(true);
				saveGmailData(result);
			});
		} catch (error) {
			console.log(error);
			setGmailConnected(false);
		}
	};

	const checkSmsPermission = async () => {
		try {
			if (Platform.OS === "android") {
				const permission = PermissionsAndroid.PERMISSIONS.READ_SMS;
				const hasPermission = await PermissionsAndroid.check(permission);
				setSmsPermission(hasPermission);
			} else {
				const permission = PERMISSIONS.IOS.READ_SMS;
				const status = await request(permission);
				const hasPermission = status === "granted";
				setSmsPermission(hasPermission);
			}
		} catch (error) {
			setSmsPermission(false);
		}
	};

	useEffect(() => {
		if (permissions && permissions.isGmailConnected) {
			setGmailConnected(true);
		}
	}, [permissions]);

	useEffect(() => {
		checkSmsPermission();
		GoogleSignin.configure({
			webClientId,
			androidClientId,
			offlineAccess: true,
			scopes: ["https://www.googleapis.com/auth/gmail.readonly"],
		});
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Header isBackAvailable={true} handleBack={onFinish} />
			<ScrollView style={styles.body}>
				<View style={styles.card}>
					<Text style={styles.cardTitle}>Collect Coupon From Phone</Text>
					<Text style={styles.cardSubTitle}>
						Give access to your Phone inbox to read all messages and extract coupons.
					</Text>
					{hasSmsPermission ? (
						<TouchableHighlight
							activeOpacity={0.5}
							underlayColor={colors.primary}
							style={[styles.cardButton, { backgroundColor: colors.dark600 }]}
							onPress={() => {}}
						>
							<Text style={[styles.buttonText, { color: colors.dark200 }]}>
								Permission Given
							</Text>
						</TouchableHighlight>
					) : (
						<TouchableHighlight
							activeOpacity={0.5}
							underlayColor={colors.primary}
							style={styles.cardButton}
							onPress={fetchAllSMS}
						>
							<Text style={styles.buttonText}>Give Permission</Text>
						</TouchableHighlight>
					)}
				</View>
				<View style={styles.card}>
					<Text style={styles.cardTitle}>Collect Coupon From Email</Text>
					<Text style={styles.cardSubTitle}>
						Give access to your Google email inbox to read all emails and extract
						coupons.
					</Text>
					{isGmailConnected ? (
						<TouchableHighlight
							activeOpacity={0.5}
							underlayColor={colors.primary}
							style={[styles.cardButton, { backgroundColor: colors.dark600 }]}
							onPress={() => {}}
						>
							<Text style={[styles.buttonText, { color: colors.dark200 }]}>
								Gmail Connected
							</Text>
						</TouchableHighlight>
					) : (
						<TouchableHighlight
							activeOpacity={0.5}
							underlayColor={colors.primary}
							style={styles.cardButton}
							onPress={connectGmail}
						>
							<Text style={styles.buttonText}>Connect Gmail</Text>
						</TouchableHighlight>
					)}
				</View>
				<View style={styles.card}>
					<Text style={styles.cardTitle}>Collect Coupon From Apps</Text>
					<Text style={styles.cardSubTitle}>
						We are working on a new feature that will allow you to collect coupons from
						your favorite shopping apps. To access this feature earlier, join our Pro
						plan.
					</Text>
				</View>

				<View style={styles.infoCard}>
					<Text style={styles.heading}>How we collect coupons?</Text>
					<View style={styles.ol}>
						{list.map((item, idx) => (
							<Text key={idx} style={styles.li}>
								{idx + 1}. {item}
							</Text>
						))}
					</View>
				</View>
				<View style={styles.buttonGroup}>
					<TouchableHighlight
						activeOpacity={0.5}
						underlayColor={colors.primary}
						style={styles.skipBtn}
						onPress={onFinish}
					>
						<Text style={styles.buttonText}>Skip</Text>
					</TouchableHighlight>
					<TouchableHighlight
						activeOpacity={0.5}
						underlayColor={colors.primary}
						style={styles.proccedBtn}
						onPress={onFinish}
					>
						<Text style={styles.buttonText}>Procced</Text>
					</TouchableHighlight>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default PermissionScreen;
