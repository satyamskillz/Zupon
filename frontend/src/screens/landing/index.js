import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PrimaryBtn from "../../components/buttons/Primary";
import { Text, View, Image } from "react-native";
import { useEffect } from "react";

import store from "../../store";
import styles from "./style";

const webClientId = "1087337224518-vrfjqv6eeu9n6rr7ltjmabs22ntnjb06.apps.googleusercontent.com";
const androidClientId = "1087337224518-533re7n2shc0tof16pts4n19vi1179m1.apps.googleusercontent.com";

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
