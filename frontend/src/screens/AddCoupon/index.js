import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
	SafeAreaView,
	TouchableWithoutFeedback,
	TextInput,
	Dimensions,
	Button,
} from "react-native";

import { useState } from "react";
import colors from "../../constants/colors";
import Header from "../../components/Header";
import DatePicker from "react-native-date-picker";
import PrimaryBtn from "../../components/buttons/Primary";

const AddCouponScreen = (props) => {
	const { navigation } = props;
	const [brandName, setBrandName] = useState("");
	const [couponLink, setCouponLink] = useState("");
	const [couponCode, setCouponCode] = useState("");
	const [couponOffer, setCouponOffer] = useState("");
	const [expirationDate, setExpirationDate] = useState(new Date());
	const screenWidth = Dimensions.get("window").width;

	return (
		<SafeAreaView style={styles.container}>
			<Header isBackAvailable={true} {...props} />
			<ScrollView style={styles.body}>
				<FormInput value={brandName} onChangeText={setBrandName} placeholder="Brand name" />
				<FormInput
					value={couponCode}
					onChangeText={setCouponCode}
					placeholder="Coupon Code"
				/>
				<FormInput
					value={couponOffer}
					onChangeText={setCouponOffer}
					placeholder="Coupon Offer"
				/>
				<FormInput
					value={couponLink}
					onChangeText={setCouponLink}
					placeholder="Coupon Link (Optional)"
				/>
				<Text style={styles.dateLabel}>Expiration Date</Text>
				<View style={styles.datePicker}>
					<DatePicker
						mode="date"
						textColor="#000"
						date={expirationDate}
						fadeToColor={colors.light800}
						onDateChange={setExpirationDate}
						style={{ width: screenWidth - 32 }}
					/>
				</View>

				<PrimaryBtn title="Add Coupon" width="100%" />
			</ScrollView>
		</SafeAreaView>
	);
};

export default AddCouponScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "relative",
	},
	body: {
		padding: 16,
		backgroundColor: colors.light800,
	},
	inputBox: {
		position: "relative",
		marginTop: 8,
	},
	input: ({ isFocused }) => ({
		fontSize: 16,
		borderRadius: 6,
		marginBottom: 16,
		paddingHorizontal: 16,
		color: colors.dark900,
		borderWidth: isFocused ? 1 : 1,
		borderColor: isFocused ? colors.dark900 : colors.dark500,
	}),
	datePicker: {
		borderWidth: 1,
		borderRadius: 6,
		overflow: "hidden",
		paddingVertical: 16,
		borderColor: colors.dark500,
		marginBottom: 32,
	},
	label: {
		top: -10,
		left: 10,
		zIndex: 1,
		fontSize: 13,
		marginBottom: 4,
		paddingHorizontal: 4,
		position: "absolute",
		color: colors.dark800,
		backgroundColor: colors.light800,
	},
	dateLabel: {
		fontSize: 16,
		marginBottom: 4,
		textAlign: "center",
		paddingHorizontal: 4,
		color: colors.dark800,
		backgroundColor: colors.light800,
	},
});

const FormInput = (props) => {
	const [isFocused, setFocused] = useState(false);

	return (
		<View style={styles.inputBox}>
			{isFocused || props.value ? (
				<Text style={styles.label}>{props.placeholder}</Text>
			) : null}
			<TextInput
				{...props}
				placeholderTextColor="#444"
				onBlur={() => setFocused(false)}
				onFocus={() => setFocused(true)}
				style={styles.input({ isFocused })}
				placeholder={!isFocused ? props.placeholder : ""}
			/>
		</View>
	);
};
