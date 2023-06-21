import SmsAndroid from "react-native-get-sms-android";
import { PermissionsAndroid } from "react-native";

var filter = { box: "inbox" };

export default async () => {
	try {
		const permission = PermissionsAndroid.PERMISSIONS.READ_SMS;
		const hasPermission = await PermissionsAndroid.check(permission);
		if (hasPermission) {
			SmsAndroid.list(
				JSON.stringify(filter),
				(error) => {
					return false;
				},
				(count, list) => {
					return {
						count,
						list,
					};
				}
			);
		} else {
			return false;
		}
	} catch (error) {
		return false;
	}
};
