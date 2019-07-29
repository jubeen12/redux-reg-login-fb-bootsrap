import * as firebase from "firebase";
// replace this variable, with your own config variable
// from your firebase project
var config = {
    apiKey: "AIzaSyCT8ikxVCHPI6qu87Igd6TTf1bRcXCWsYo",
    authDomain: "fb-redux-bootstrap.firebaseapp.com",
    databaseURL: "https://fb-redux-bootstrap.firebaseio.com",
    projectId: "fb-redux-bootstrap",
    storageBucket: "",
    messagingSenderId: "709537894327",
    appId: "1:709537894327:web:05b0403bd05bd8bb"
};
let firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig;