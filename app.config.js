import "dotenv/config";

export default {
	expo: {
		plugins: [
			[
				"expo-camera",
				{
					cameraPermission: "Allow $(PRODUCT_NAME) to access your camera.",
				},
			],
		],
		name: "Client",
		slug: "Client",
		version: "1.0.0",
		orientation: "portrait",
		icon: "./assets/icon.png",
		userInterfaceStyle: "light",
		splash: {
			image: "./assets/splash.png",
			resizeMode: "contain",
			backgroundColor: "#ffffff",
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
		},
		android: {
			adaptiveIcon: {
				foregroundImage: "./assets/adaptive-icon.png",
				backgroundColor: "#ffffff",
			},
		},
		web: {
			favicon: "./assets/favicon.png",
		},
		extra: {
			apiKey: process.env.APIKEY,
			authDomain: process.env.AUTHDOMAIN,
			projectId: process.env.PROJECTID,
			storageBucket: process.env.STORAGEBUCKET,
			messagingSenderId: process.env.MESSAGINGSENDERID,
			appId: process.env.APPID,
			measurementId: process.env.MEASUREMENTID,
		},
	},
};
