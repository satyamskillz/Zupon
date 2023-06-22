import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	TouchableWithoutFeedback,
	TouchableHighlight,
} from "react-native";
import React, { useEffect, useState } from "react";

import ViewCouponCard from "../../containers/ViewCouponCard";
import CouponCard from "../../containers/CouponCard";
import Hexagon from "../../components/Hexagon";
import Header from "../../components/Header";
import colors from "../../constants/colors";

const couponList = [
	{
		brand: "Coupon Brand 01",
		time: "Expiring in 2 days",
		offer: "50% off upto $500",
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
	},
	{
		brand: "Coupon Brand 02",
		time: "Expiring in 2 days",
		offer: "50% off upto $500",
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
	},
	{
		brand: "Coupon Brand 03",
		time: "Expiring in 2 days",
		offer: "50% off upto $500",
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
	},
	{
		brand: "Coupon Brand 04",
		time: "Expiring in 2 days",
		offer: "50% off upto $500",
		id: "58694a0f-3da1-471f-bd96-145571e29d73",
	},
	{
		brand: "Coupon Brand 05",
		time: "Expiring in 2 days",
		offer: "50% off upto $500",
		id: "58694a0f-3da1-471f-bd96-145571e29d74",
	},
	{
		brand: "Coupon Brand 06",
		time: "Expiring in 2 days",
		offer: "50% off upto $500",
		id: "58694a0f-3da1-471f-bd96-145571e2wd73",
	},
	{
		brand: "Coupon Brand 07",
		time: "Expiring in 2 days",
		offer: "50% off upto $500",
		id: "58694a0f-3da1-471f-bd96-145571e2fd74",
	},
	{
		brand: "Coupon Brand 08",
		time: "Expiring in 2 days",
		offer: "50% off upto $500",
		id: "58694a0f-3da1-471f-bd96-145571e2ed74",
	},
	{
		brand: "Coupon Brand 09",
		time: "Expiring in 2 days",
		offer: "50% off upto $500",
		id: "58694a0f-3da1-471f-bd96-145571et9d74",
	},
	{
		brand: "Coupon Brand 10",
		time: "Expiring in 2 days",
		offer: "50% off upto $500",
		id: "58694a0f-3da1-471f-bd96-145g71e29d74",
	},
	{
		brand: "Coupon Brand 11",
		time: "Expiring in 2 days",
		offer: "50% off upto $500",
		id: "58694a0f-3da1-471f-bd96-145h71e29d74",
	},
	{
		brand: "Coupon Brand 12",
		time: "Expiring in 2 days",
		offer: "50% off upto $500",
		id: "58694a0f-3da1-471f-bd96-145n71e29d74",
	},
];

const DashboardScreen = ({ navigation }) => {
	const [selectedCouponId, setSelectedCouponId] = useState(null);

	const handleCouponPress = (id) => {
		setSelectedCouponId(id);
	};

	const syncEmails = () => {};
	const syncSMS = () => {};

	useEffect(() => {
		return () => setSelectedCouponId(null);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Header isBackAvailable={false} />

			<ScrollView style={styles.body}>
				<View style={styles.infoCard}>
					<TouchableWithoutFeedback>
						<Hexagon text="18" subText="Active" />
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback>
						<Hexagon text="64" subText="Used" />
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback>
						<Hexagon text="95" subText="Expired" />
					</TouchableWithoutFeedback>
				</View>
				<View style={styles.groupBreaker}>
					<Text style={styles.groupLabel}>Active Coupons</Text>

					<TouchableHighlight
						underlayColor={colors.light700}
						style={styles.syncBtn}
						onPress={syncEmails}
						activeOpacity={0.5}
					>
						<Text style={styles.syncBtnText}>Sync Gmail</Text>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={colors.light700}
						style={styles.syncBtn}
						onPress={syncEmails}
						activeOpacity={0.5}
					>
						<Text style={styles.syncBtnText}>Sync SMS</Text>
					</TouchableHighlight>
				</View>
				{couponList?.map((coupon, idx) => (
					<CouponCard key={idx} data={coupon} onPress={handleCouponPress} />
				))}
				<View style={styles.shareCard}>
					<Text style={styles.missionText}>
						We are here to save your money and time, We will be adding more smart
						feature each week.
					</Text>
				</View>
			</ScrollView>

			{selectedCouponId && (
				<ViewCouponCard
					onClose={() => setSelectedCouponId(null)}
					data={couponList?.filter((c) => c.id === selectedCouponId)[0]}
				/>
			)}

			<View style={styles.footer}>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => navigation.navigate("AddCoupon")}
				>
					<Hexagon text="+" render={<PlusIcon />} height={72} />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default DashboardScreen;

const PlusIcon = () => (
	<Image style={styles.plusIcon} source={require("../../../assets/images/dark_plus.png")} />
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "relative",
	},
	plusIcon: {
		width: 32,
		height: 32,
	},
	body: {
		padding: 16,
		paddingBottom: 0,
		backgroundColor: colors.light800,
	},
	footer: {
		bottom: 16,
		left: "50%",
		display: "flex",
		position: "absolute",
		alignItems: "center",
		justifyContent: "center",
		transform: [{ translateX: -((Math.sqrt(3) / 2) * 72) / 2 }],
	},
	infoCard: {
		borderWidth: 1,
		paddingTop: 32,
		display: "flex",
		borderRadius: 6,
		marginBottom: 16,
		paddingBottom: 24,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-evenly",
		backgroundColor: colors.dark800,
		borderColor: colors.dark700,
	},
	shareCard: {
		borderRadius: 6,
		marginBottom: 150,
		paddingVertical: 12,
		paddingHorizontal: 16,
		backgroundColor: colors.primary,
	},
	missionText: {
		fontSize: 15,
		fontWeight: 400,
		textAlign: "justify",
		color: colors.dark900,
	},
	groupBreaker: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		marginBottom: 16,
	},
	groupLabel: {
		fontSize: 16,
		fontWeight: 600,
		marginRight: "auto",
		color: colors.dark600,
	},
	syncBtn: {
		marginLeft: 8,
		borderRadius: 24,
		paddingVertical: 4,
		paddingHorizontal: 12,
		backgroundColor: colors.light700,
	},
	syncBtnText: {
		fontSize: 12,
		fontWeight: 500,
		color: colors.dark500,
	},
});
