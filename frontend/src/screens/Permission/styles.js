import colors from "../../constants/colors";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "relative",
	},
	body: {
		padding: 16,
		backgroundColor: colors.light800,
	},
	card: {
		backgroundColor: colors.dark900,
		marginBottom: 16,
		borderRadius: 6,
		padding: 16,
	},

	cardTitle: {
		fontSize: 18,
		fontWeight: 400,
		marginBottom: 4,
		color: colors.light900,
		// textAlign: "center",
	},

	cardSubTitle: {
		fontSize: 14,
		fontWeight: 400,
		color: colors.light500,
	},

	heading: {
		fontSize: 18,
		fontWeight: 500,
		color: colors.dark900,
	},
	infoCard: {
		backgroundColor: colors.light900,
		marginBottom: 16,
		borderRadius: 6,
		padding: 16,
	},
	li: {
		fontSize: 14,
		marginTop: 4,
		fontWeight: 400,
		color: colors.dark900,
	},
	cardButton: {
		marginTop: 16,
		borderRadius: 6,
		paddingVertical: 12,
		paddingHorizontal: 16,
		backgroundColor: colors.primary,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 600,
		textAlign: "center",
		color: colors.dark900,
	},

	buttonGroup: {
		flexDirection: "row",
		paddingBottom: 32,
		display: "flex",
	},
	skipBtn: {
		flex: 1,
		marginRight: 16,
		borderRadius: 6,
		paddingVertical: 12,
		paddingHorizontal: 16,
		backgroundColor: colors.light700,
	},
	proccedBtn: {
		flex: 1,
		borderRadius: 6,
		paddingVertical: 12,
		paddingHorizontal: 16,
		backgroundColor: colors.primary,
	},
});
