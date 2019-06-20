import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCfc6Mf02y91r0IHgoiRtOTDFvsC69GDRA",
  authDomain: "coffee-app-32d08.firebaseapp.com",
  databaseURL: "https://coffee-app-32d08.firebaseio.com",
  projectId: "coffee-app-32d08",
  storageBucket: "coffee-app-32d08.appspot.com",
  messagingSenderId: "1054895270988",
  appId: "1:1054895270988:web:9844721da528518c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;