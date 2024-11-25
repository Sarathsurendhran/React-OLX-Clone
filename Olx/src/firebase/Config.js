import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyALTU8mWxUCaKXDlQiElTbXqvo2IxTzFz8",
  authDomain: "fir-78f39.firebaseapp.com",
  projectId: "fir-78f39",
  storageBucket: "fir-78f39.appspot.com",
  messagingSenderId: "993178992829",
  appId: "1:993178992829:web:0addb40a21f3cd107af7d4",
  measurementId: "G-0QLS1LF8MM"
};

export default firebase.initializeApp(firebaseConfig);
