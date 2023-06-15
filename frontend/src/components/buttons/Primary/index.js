import { StyleSheet, TouchableHighlight } from "react-native";
import colors from "../../../constants/colors";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

function PrimaryBtn(props) {
	return (
		<View style={styles.container}>
			<TouchableHighlight
				activeOpacity={0.5}
				underlayColor={colors.primary}
				style={[
					styles.button,
					{ backgroundColor: colors[props.color], width: props.width },
				]}
				onPress={props.onPress}
			>
				<Text style={styles.text}>{props.title}</Text>
			</TouchableHighlight>
		</View>
	);
}

PrimaryBtn.propTypes = {
	title: PropTypes.string,
	color: PropTypes.string,
	onPress: PropTypes.func,
};

PrimaryBtn.defaultProps = {
	color: "primary",
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		justifyContent: "center",
		paddingHorizontal: 32,
		alignItems: "center",
		paddingVertical: 18,
		borderRadius: 7,
	},
	container: {
		display: "flex",
		alignItems: "center",
	},
	text: {
		fontSize: 22,
		fontWeight: 600,
		textAlign: "center",
		color: colors.dark900,
	},
});

export default PrimaryBtn;
