import firebase from "firebase/app"
import "firebase/auth"
const app = firebase.initializeApp({
    apiKey: "AIzaSyDwYQ_oBey1u2vbRqSyxEmwUnos5TdqBpQ",
    authDomain: "todo-list-32342.firebaseapp.com",
    databaseURL: "https://todo-list-32342.firebaseio.com",
    projectId: "todo-list-32342",
    storageBucket: "todo-list-32342.appspot.com",
    messagingSenderId: "620061154231",
    appId: "1:620061154231:web:58861aae156c99d3e76632",
    measurementId: "G-5GH2NL89P4"
})
export const auth = app.auth()
export default app