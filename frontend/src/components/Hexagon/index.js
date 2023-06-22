import { Text, View, StyleSheet } from "react-native";
import colors from "../../constants/colors";

function Hexagon({ text, render, subText, height = 80, bgColor = colors.primary }) {
	const calculateWidth = (height) => {
		return height * (Math.sqrt(3) / 2);
	};

	const width = calculateWidth(height);

	return (
		<View style={styles.container}>
			<View style={styles.shape}>
				<View style={styles.top({ height, width, bgColor })}></View>
				<View style={styles.center({ height, width, bgColor })}>
					{render ? render : <Text style={styles.label}>{text}</Text>}
				</View>
				<View style={styles.bottom({ height, width, bgColor })}></View>
			</View>
			{subText && <Text style={styles.subLabel}>{subText}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	shape: {
		marginBottom: 12,
	},
	label: {
		fontSize: 24,
		fontWeight: 600,
		color: colors.dark900,
	},
	subLabel: {
		fontSize: 16,
		fontWeight: 500,
		color: colors.primary,
	},
	top: ({ height, width, bgColor }) => ({
		width: 0,
		height: 0,
		borderLeftWidth: width / 2,
		borderRightWidth: width / 2,
		borderBottomWidth: height / 4,
		backgroundColor: "transparent",
		borderLeftColor: "transparent",
		borderRightColor: "transparent",
		borderBottomColor: bgColor,
	}),
	center: ({ height, width, bgColor }) => ({
		width: width,
		height: height / 2,

		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: bgColor,
	}),
	bottom: ({ height, width, bgColor }) => ({
		width: 0,
		height: 0,
		borderTopWidth: height / 4,
		borderLeftWidth: width / 2,
		borderRightWidth: width / 2,
		backgroundColor: "transparent",
		borderLeftColor: "transparent",
		borderRightColor: "transparent",
		borderTopColor: bgColor,
	}),
});

export default Hexagon;
