import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDen_ecC5yXy4uaCONgVsIlty_ZcPBiFvQ",
  authDomain: "portfolio-14f06.firebaseapp.com",
  databaseURL: "https://portfolio-14f06.firebaseio.com",
  projectId: "portfolio-14f06",
  storageBucket: "portfolio-14f06.appspot.com",
  messagingSenderId: "689633125709",
  appId: "1:689633125709:web:76ac2e5c3847b7ab814304",
  measurementId: "G-5KD4XZK3KR"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();