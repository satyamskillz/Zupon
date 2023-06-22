import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../../constants/colors";

const CouponCard = ({ data, onPress }) => (
	<TouchableOpacity onPress={() => onPress(data.id)} style={styles.container} activeOpacity={0.7}>
		<View style={styles.colOne}>
			<View style={styles.brand}>
				<Text style={styles.brandName}>{data.brand}</Text>
			</View>
			<View style={styles.expTime}>
				<Text style={styles.time}>{data.time}</Text>
			</View>
		</View>
		<View style={styles.colTwo}>
			<Text style={styles.detail}>{data.offer}</Text>
		</View>
	</TouchableOpacity>
);

export default CouponCard;

const styles = StyleSheet.create({
	container: {
		padding: 15,
		borderWidth: 1,
		borderRadius: 6,
		marginBottom: 12,
		borderColor: colors.light700,
		backgroundColor: colors.light900,
	},
	colOne: {
		display: "flex",
		flexDirection: "row",
		// alignItems: "center",
	},
	colTwo: {
		display: "flex",
		flexDirection: "row",
	},
	brand: {
		flex: 1,
	},
	brandName: {
		fontSize: 14,
		fontWeight: 400,
		color: colors.dark600,
	},
	expTime: {
		borderRadius: 16,
		paddingVertical: 5,
		paddingHorizontal: 12,
		backgroundColor: colors.light800,
	},
	time: {
		fontSize: 12,
		fontWeight: 400,
		color: colors.dark900,
	},
	detail: {
		fontSize: 18,
		fontWeight: 500,
		color: colors.dark900,
	},
});
