import { createContext, useContext, useState } from "react";

const CameraContext = createContext();

export const CameraProvider = ({ children }) => {
	const [image, setImage] = useState(null);

	async function takePicture(cameraRef) {
		if (cameraRef) {
			try {
				const data = await cameraRef.current.takePictureAsync();
				console.log(data);
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
