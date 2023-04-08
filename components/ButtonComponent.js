import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

function ButtonComponent({ icon, onPress, title, color }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			<Entypo name={icon} color={color ? color : "#f1f1f1"} size={28}>
				<Text style={styles.text}>{title}</Text>
			</Entypo>
		</TouchableOpacity>
	);
}

export default ButtonComponent;

const styles = StyleSheet.create({
	button: {
		height: 40,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
        backgroundColor: "#000",
	},
	text: {
		fontWeight: "bold",
		fontSize: 16,
		color: "#f1f1f1",
		marginLeft: 10,
	},
});
