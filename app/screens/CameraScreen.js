import { Camera, CameraType } from "expo-camera";
import { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as MediaLibrary from "expo-media-library";
import ButtonComponent from "../../components/ButtonComponent";
import { useCamera } from "../../context/cameraContext";

function CameraScreen({ navigation }) {
	const { takePicture } = useCamera();
	const [type, setType] = useState(CameraType.back);
	const [permission, setPermission] = Camera.useCameraPermissions();
	const cameraRef = useRef(null);

	function toggleCameraType() {
		setType((current) =>
			current === CameraType.back ? CameraType.front : CameraType.back
		);
	}

	useEffect(() => {
		(async () => {
			MediaLibrary.requestPermissionsAsync();
			const cameraStatus = await Camera.requestCameraPermissionsAsync();
			setPermission(cameraStatus.status === "granted");
		})();
	}, []);

	if (permission === false) {
		return <Text>No Camera Access</Text>;
	}

	return (
		<View style={styles.container}>
			<Camera style={styles.camera} ref={cameraRef} type={type}>
				<Text style={styles.text}>Flip Camera</Text>
			</Camera>
			<View>
				<ButtonComponent icon={"camera"} onPress={() => takePicture(cameraRef)} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	camera: {
		flex: 1,
		borderRadius: 20,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},
	text: {
		fontWeight: "bold",
		color: "#fff",
	},
});

export default CameraScreen;
