import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged  } from "firebase/auth";
import { doc, setDoc,getDoc,addDoc,updateDoc,getFirestore, collection, getDocs,onSnapshot } from "firebase/firestore"; 
// import { getCookies } from 'cookies-next'


const firebaseConfig = {
    apiKey: "AIzaSyCoJdqzicSsMRPrMk_OVUoQDaMPeNBi-aU",
    authDomain: "myapi-e41ca.firebaseapp.com",
    databaseURL: "https://myapi-e41ca.firebaseio.com",
    projectId: "myapi-e41ca",
    storageBucket: "myapi-e41ca.appspot.com",
    messagingSenderId: "32408026713",
    appId: "1:32408026713:web:2330e927eb552d3ddafb48",
    measurementId: "G-914Y5L8LFJ"
  };



  // Initialize Firebase
const app =initializeApp(firebaseConfig);
const db = getFirestore(app);


export {db,doc,getDoc, collection, getDocs,addDoc,onSnapshot};

