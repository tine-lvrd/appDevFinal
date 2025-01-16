// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Platform } from "react-native";

let initializeAuth;
let getReactNativePersistence;
let AsyncStorage;

// Conditionally import React Native modules
if (Platform.OS !== "web") {
  initializeAuth = require("firebase/auth").initializeAuth;
  getReactNativePersistence = require("firebase/auth").getReactNativePersistence;
  AsyncStorage = require("@react-native-async-storage/async-storage").default;
}

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF4iu-w60S6ORq8uQ0WMgsCrh-hyEAA1o",
  authDomain: "learning-hub-f4bd6.firebaseapp.com",
  projectId: "learning-hub-f4bd6",
  storageBucket: "learning-hub-f4bd6.firebasestorage.app",
  messagingSenderId: "897460974727",
  appId: "1:897460974727:web:578a4431384580f22b7422",
  measurementId: "G-9QST8KKE9L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
let auth;
if (Platform.OS === "web") {
  auth = getAuth(app); // Use web-friendly Firebase Auth
} else {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export { app, auth };
