import { initializeApp } from "firebase/app";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import Constants from "expo-constants";

const firebaseConfig = {
	apiKey: Constants.manifest.extra.apiKey,
	authDomain: Constants.manifest.extra.authDomain,
	projectId: Constants.manifest.extra.projectId,
	storageBucket: Constants.manifest.extra.storageBucket,
	messagingSenderId: Constants.manifest.extra.messagingSenderId,
	appId: Constants.manifest.extra.appId,
	measurementId: Constants.manifest.extra.measurementId,
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const provider = new GoogleAuthProvider();
const functions = getFunctions();

export const labelImage = httpsCallable(functions, "labelImage");

export async function registerNewUser(email, password) {
	try {
		const newUserCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = newUserCredential.user;

		return user;
		// ...
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		// ...
		return errorCode, errorMessage;
	}
}

export async function loginUser(email, password) {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		const user = userCredential.user;
		return user;
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		// ...
		return errorCode, errorMessage;
	}
}
