import { createContext, useContext, useState } from "react";
import { labelImage } from "../config/firebase.js";

const CameraContext = createContext();

export const CameraProvider = ({ children }) => {
	const [image, setImage] = useState(null);

	async function takePicture(cameraRef) {
		if (cameraRef) {
			try {
				const data = await cameraRef.current.takePictureAsync();
				console.log(data);
				await labelImage({ image: data.uri });
				setImage(data.uri);
			} catch (error) {
				console.error(error);
			}
		}
	}

	return (
		<CameraContext.Provider value={{ takePicture, image }}>
			{children}
		</CameraContext.Provider>
	);
};

export const useCamera = () => useContext(CameraContext);
