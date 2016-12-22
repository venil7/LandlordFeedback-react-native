import ReactNative from "react-native";
import * as firebase from 'firebase';
import {
  API_KEY, AUTH_DOMAIN, DATABASE_URL,
  STORAGE_BUCKET, MESSAGING_SERVER_ID
} from 'react-native-dotenv';


const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SERVER_ID
};

firebase.initializeApp(config);
firebase.auth().signInAnonymously();

export default firebase.database();