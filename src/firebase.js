// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBLuY26yaUNrvR8gokRzTTKjoDhTwDzss8",
  authDomain: "multiplayer-clicker-d9997.firebaseapp.com",
  databaseURL: "https://multiplayer-clicker-d9997-default-rtdb.firebaseio.com",
  projectId: "multiplayer-clicker-d9997",
  storageBucket: "multiplayer-clicker-d9997.firebasestorage.app",
  messagingSenderId: "1084520948185",
  appId: "1:1084520948185:web:b9faf4c0605639189239c8",
  measurementId: "G-RGVRM0E96X"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { database, analytics };
