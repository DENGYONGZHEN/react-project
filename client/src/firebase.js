// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-84c7e.firebaseapp.com',
  projectId: 'mern-estate-84c7e',
  storageBucket: 'mern-estate-84c7e.appspot.com',
  messagingSenderId: '751171417065',
  appId: '1:751171417065:web:56c020e31e538af27bd178',
  measurementId: 'G-7H6TLR6J30',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
