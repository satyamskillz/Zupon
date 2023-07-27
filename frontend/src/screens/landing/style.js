import colors from "../../constants/colors";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
	appName: {
		fontSize: 64,
		color: "#ffffff",
		textAlign: "center",
		marginVertical: 32,
		fontWeight: "900",
		letterSpacing: 5,
	},
	body: {
		bottom: 0,
		width: "100%",
		position: "absolute",
		backgroundColor: "#fff",
		paddingHorizontal: 32,
		paddingVertical: 56,
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
		margin: 10,
		marginTop: 32,
		fontSize: 20,
	},
	formTitle: {
		fontSize: 36,
		marginBottom: 36,
		textAlign: "center",
		color: colors.dark900,
		fontWeight: "600",
	},
	header: {
		height: "70%",
	},
});
