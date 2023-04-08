import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { db } from "../../config/firebase";
import { useUser } from "../../context/userContext";

function WelcomeScreen({ navigation }) {
	const { handleRegister, handleLogin, isLoggedIn } = useUser();
	const [email, onEmailChange] = useState("");
	const [password, onPasswordChange] = useState("");

	useEffect(() => {
		console.log(isLoggedIn)
		if (isLoggedIn === true) {
			navigation.navigate("Home");
		}
	}, [isLoggedIn]);

	return (
		<View style={styles.screen}>
			<View style={styles.welcome}>
				<Text style={styles.message}>Hello World ...</Text>
			</View>
			<TextInput
				style={styles.input}
				value={email}
				placeholder="Email Address"
				onChangeText={onEmailChange}
			></TextInput>
			<TextInput
				style={styles.input}
				value={password}
				placeholder="Password"
				secureTextEntry={true}
				onChangeText={onPasswordChange}
			></TextInput>
			<Pressable onPress={()=> handleLogin(email, password)}>
				<Text>Login</Text>
			</Pressable>
			<Pressable onPress={() => handleRegister(email, password)}>
				<Text>Register</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		width: "80%",
		borderWidth: 1,
		padding: 10,
	},
	welcome: {
		flex: 0.5,
		justifyContent: "center",
		alignItems: "center",
	},
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	message: {
		fontWeight: "bold",
	},
});

export default WelcomeScreen;
