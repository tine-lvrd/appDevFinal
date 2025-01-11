// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF4iu-w60S6ORq8uQ0WMgsCrh-hyEAA1o",
  authDomain: "learning-hub-f4bd6.firebaseapp.com",
  projectId: "learning-hub-f4bd6",
  storageBucket: "learning-hub-f4bd6.firebasestorage.app",
  messagingSenderId: "897460974727",
  appId: "1:897460974727:web:578a4431384580f22b7422",
  measurementId: "G-9QST8KKE9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };
