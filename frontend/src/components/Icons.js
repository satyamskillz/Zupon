import MIcon from "react-native-vector-icons/MaterialIcons";

MIcon.loadFont();

export const IconSizes = {
	small: 14,
	medium: 18,
	large: 24,
	xlarge: 30,
	xxLarge: 36,
};

export const MaterialIcon = ({ size, name, color }) => (
	<MIcon name={name} size={IconSizes[size]} color={color} />
);
