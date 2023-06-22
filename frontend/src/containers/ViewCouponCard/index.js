import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { initials } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { SvgXml } from "react-native-svg";

import PopupLayout from "../../layouts/PopupLayout";
import Hexagon from "../../components/Hexagon";
import colors from "../../constants/colors";

function ViewCouponCard({ data, onClose }) {
	const avatar = createAvatar(initials, {
		backgroundColor: ["000000"],
		seed: data.brand,
		fontWeight: 500,
		fontSize: 45,
		chars: 1,
	}).toString();

	const onPress = () => {
		Linking.openURL("https://neuton.app").catch((err) => console.log(err));
	};

	return (
		<PopupLayout onClose={onClose}>
			<View style={styles.container}>
				<View style={styles.brand}>
					<View style={styles.brandLogo}>
						<SvgXml style={styles.img} xml={avatar} />
					</View>
					<Text style={styles.brandName}>{data?.brand}</Text>
				</View>
				<View style={styles.content}>
					<View style={styles.codeBox({ bw: 1 })}>
						<Text style={styles.codeLabel}>Expiration Date : </Text>
						<Text style={styles.codeText}>01/05/2024</Text>
					</View>
					<View style={styles.codeBox({ bw: 1 })}>
						<Text style={styles.codeLabel}>Offer : </Text>
						<Text style={styles.codeText}>{data?.offer}</Text>
					</View>
					<TouchableOpacity
						onPress={onPress}
						activeOpacity={0.8}
						underlayColor={colors.light900}
					>
						<View style={styles.codeBox({ bw: 1 })}>
							<Text style={styles.codeLabel}>Link : </Text>
							<Text style={styles.codeText}>https://google.com</Text>
						</View>
					</TouchableOpacity>
					<View style={styles.codeBox({ bw: 0 })}>
						<Text style={styles.codeLabel}>Coupon : </Text>
						<Text style={styles.codeText}>FGS7TG</Text>
					</View>
				</View>
				<View style={styles.buttonGroup}>
					<TouchableOpacity activeOpacity={0.8} underlayColor={colors.light900}>
						<Hexagon
							text="Delete"
							render={<DeleteIcon />}
							bgColor={colors.red}
							height={72}
						/>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.8} underlayColor={colors.light900}>
						<Hexagon
							text="Copy"
							render={<CopyIcon />}
							bgColor={colors.blue}
							height={72}
						/>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.8} underlayColor={colors.light900}>
						<Hexagon
							text="Share"
							render={<ShareIcon />}
							bgColor={colors.green}
							height={72}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</PopupLayout>
	);
}

export default ViewCouponCard;

const DeleteIcon = () => (
	<Image style={styles.icon} source={require("../../../assets/images/delete.png")} />
);
const CopyIcon = () => (
	<Image style={styles.icon} source={require("../../../assets/images/copy.png")} />
);
const ShareIcon = () => (
	<Image style={styles.icon} source={require("../../../assets/images/gift.png")} />
);

const styles = StyleSheet.create({
	container: {
		paddingVertical: 24,
		paddingHorizontal: 16,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		backgroundColor: colors.light900,
	},
	content: {
		borderRadius: 6,
		backgroundColor: colors.light800,
	},
	icon: {
		width: 32,
		height: 32,
	},
	brand: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
	},
	brandLogo: {
		width: 32,
		height: 32,
		borderWidth: 1,
		borderRadius: 16,
		overflow: "hidden",
		marginRight: 8,
	},
	img: {
		width: "100%",
		height: "100%",
	},
	brandName: {
		fontSize: 18,
		fontWeight: 500,
		color: colors.dark700,
	},
	offer: {
		fontSize: 24,
		fontWeight: 500,
		color: colors.dark900,
	},
	codeBox: ({ bw = 1 }) => ({
		display: "flex",
		paddingVertical: 12,
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: 16,
		borderBottomWidth: bw,
		borderBottomColor: colors.light600,
	}),
	codeText: {
		fontSize: 16,
		fontWeight: 600,
		color: colors.dark900,
	},
	codeLabel: {
		fontSize: 16,
		fontWeight: 600,
		color: colors.dark500,
	},
	buttonGroup: {
		width: "100%",
		marginTop: 32,
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
});
