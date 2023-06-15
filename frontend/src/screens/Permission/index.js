import {
	PermissionsAndroid,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableHighlight,
	View,
} from "react-native";
import SmsAndroid from "react-native-get-sms-android";
import Header from "../../components/Header";
import colors from "../../constants/colors";
import styles from "./styles";

const list = [
	"First, you give us permission to read emails and phone sms.",
	"We collect all existing emails/sms and new emails/sms upon arrival.",
	"Our AI filters out emails/sms that contain sensitive information like bank details.",
	"Then, our AI goes through the remaining emails/sms and extracts coupons.",
	"Once the coupon is collected, its details are sent to our servers.",
	"We use coupon data to send reminders when the coupon is expiring.",
];

var filter = {
	box: "",
};

function PermissionScreen({ navigation }) {
	const onFinish = () => {
		navigation.navigate("Dashboard");
	};

	const fetchAllSMS = async () => {
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

	const handleBack = () => {
		navigation.navigate("Dashboard");
	};

	return (
		<SafeAreaView style={styles.container}>
			<Header isBackAvailable={true} handleBack={handleBack} />
			<ScrollView style={styles.body}>
				<View style={styles.card}>
					<Text style={styles.cardTitle}>Collect Coupon From Phone</Text>
					<Text style={styles.cardSubTitle}>
						Give access to your Phone inbox to read all messages and extract coupons.
					</Text>
					<TouchableHighlight
						activeOpacity={0.5}
						underlayColor={colors.primary}
						style={styles.cardButton}
						onPress={fetchAllSMS}
					>
						<Text style={styles.buttonText}>Give Permission</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.card}>
					<Text style={styles.cardTitle}>Collect Coupon From Email</Text>
					<Text style={styles.cardSubTitle}>
						Give access to your Google email inbox to read all emails and extract
						coupons.
					</Text>
					<TouchableHighlight
						activeOpacity={0.5}
						underlayColor={colors.primary}
						style={styles.cardButton}
						onPress={onFinish}
					>
						<Text style={styles.buttonText}>Connect Gmail</Text>
					</TouchableHighlight>
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
							<Text style={styles.li}>
								{idx + 1}. {item}
							</Text>
						))}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default PermissionScreen;
