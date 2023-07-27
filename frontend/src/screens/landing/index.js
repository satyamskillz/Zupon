import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PrimaryBtn from "../../components/buttons/Primary";
import { Text, View, Image } from "react-native";
import { useEffect } from "react";

// Env Variables
import { GOOGLE_WEB_ID, GOOGLE_ANDROID_ID } from "@env";

import store from "../../store";
import styles from "./style";

const webClientId = GOOGLE_WEB_ID;
const androidClientId = GOOGLE_ANDROID_ID;

function LandingScreen({ navigation }) {
	const saveAuthData = async (authData) => {
		await AsyncStorage.setItem("@authData", JSON.stringify(authData));
		store.dispatch({ type: "LOGIN", payload: authData });
	};

	const handlePress = async () => {
		try {
			await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
			await GoogleSignin.signIn().then((result) => {
				saveAuthData(result);
			});
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				// user cancelled the login flow
				alert("User cancelled the login flow !");
			} else if (error.code === statusCodes.IN_PROGRESS) {
				alert("Signin in progress");
				// operation (f.e. sign in) is in progress already
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				alert("Google play services not available or outdated !");
				// play services not available or outdated
			} else {
				console.log(error);
			}
		}

		// navigation.navigate("Dashboard");
	};

	useEffect(() => {
		GoogleSignin.configure({
			webClientId,
			androidClientId,
			offlineAccess: true,
		});
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View>
					<Image style={styles.image} source={require("../../../assets/Staggered.png")} />
				</View>
				<Text style={styles.appName}>ZUPON</Text>
			</View>

			<View style={styles.body}>
				<View style={styles.company}>
					<Image source={require("../../../assets/companies.png")} />
				</View>

				<View style={styles.form}>
					<Text style={styles.formTitle}>Let's waste no time collecting coupons</Text>
					<PrimaryBtn title={"Continue With Google"} onPress={handlePress} />
				</View>
			</View>
		</View>
	);
}

export default LandingScreen;
