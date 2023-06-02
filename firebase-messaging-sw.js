importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');
const firebaseConfig = {
  apiKey: "AIzaSyDvlnQrEBQfKaDLuUDjgFacbL-qk9cTcEI",
  authDomain: "fir-hr-a6e5a.firebaseapp.com",
  projectId: "fir-hr-a6e5a",
  storageBucket: "fir-hr-a6e5a.appspot.com",
  messagingSenderId: "263371950169",
  appId: "1:263371950169:web:27352fec2dc59b2f3d4948"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging();