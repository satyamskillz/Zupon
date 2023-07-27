import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableWithoutFeedback, View, Animated } from "react-native";

function PopupLayout({ children, onClose }) {
	const popupTranslateY = useRef(new Animated.Value(1)).current;
	const overlayOpacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		openPopup();
	}, []);

	const openPopup = () => {
		Animated.parallel([
			Animated.spring(popupTranslateY, {
				toValue: 0,
				useNativeDriver: true,
			}),
			Animated.timing(overlayOpacity, {
				toValue: 0.7,
				duration: 300,
				useNativeDriver: true,
			}),
		]).start();
	};

	const closePopup = () => {
		Animated.parallel([
			Animated.timing(popupTranslateY, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true,
			}),
			Animated.timing(overlayOpacity, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}),
		]).start(onClose);
	};

	const translateY = popupTranslateY.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 700],
	});

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={closePopup}>
				<Animated.View
					style={[styles.overlay, { opacity: overlayOpacity }]}
				></Animated.View>
			</TouchableWithoutFeedback>
			<Animated.View style={[styles.popup, { transform: [{ translateY }] }]}>
				{children}
			</Animated.View>
		</View>
	);
}

export default PopupLayout;

const styles = StyleSheet.create({
	container: {
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 50,
		position: "absolute",
	},
	overlay: {
		width: "100%",
		height: "100%",
		backgroundColor: "black",
	},
	popup: {
		bottom: 0,
		width: "100%",
		position: "absolute",
	},
});
