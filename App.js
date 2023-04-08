import React, { useState } from "react";
import {
	StyleSheet,
	Platform,
	StatusBar,
	SafeAreaView,
	ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/CameraScreen";
import { UserProvider } from "./context/userContext";
import { CameraProvider } from "./context/cameraContext";

const Stack = createNativeStackNavigator();

export default (props) => {
	return (
		<UserProvider>
			<CameraProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerShown: false,
						}}
					>
						{/* <Stack.Screen name='Welcome' component={WelcomeScreen} /> */}
						<Stack.Screen name='Home' component={HomeScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</CameraProvider>
		</UserProvider>
	);
};

const styles = StyleSheet.create({
	AndroidSafeArea: {
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		flex: 1,
	},
});
