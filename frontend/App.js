import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";
import { useEffect } from "react";

import AddCouponScreen from "./src/screens/AddCoupon";
import LandingScreen from "./src/screens/Landing";
import HomeScreen from "./src/screens/Home";
import store from "./src/store";

const Stack = createNativeStackNavigator();

const AppStack = () => {
	return (
		<Stack.Navigator initialRouteName="Dashboard">
			<Stack.Screen
				name="Dashboard"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="AddCoupon"
				component={AddCouponScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

const AuthStack = () => {
	return (
		<Stack.Navigator initialRouteName="Landing">
			<Stack.Screen
				name="Landing"
				component={LandingScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

const AppWrapper = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

function App(props) {
	const { isLoggedIn } = useSelector((state) => state.auth);

	useEffect(() => {
		const checkLoggedIn = async () => {
			try {
				const authData = await AsyncStorage.getItem("@authData");
				if (authData) {
					store.dispatch({
						type: "LOGIN",
						payload: JSON.parse(authData),
					});
				}
			} catch (error) {
				console.log("Error retrieving @authData:", error);
			}
		};
		checkLoggedIn();
	}, []);

	return <NavigationContainer>{isLoggedIn ? <AppStack /> : <AuthStack />}</NavigationContainer>;
}

export default AppWrapper;
