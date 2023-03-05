import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "animate.css";
import "./assets/scss/main.scss";

const app = createApp(App);

const imports = [router, store];

imports.forEach(item => {
  app.use(item);
});

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3FXBFyJ9Sq55MDr2Fgjb7-QbDR_VZUgw",
  authDomain: "genshin-artifact-notes.firebaseapp.com",
  databaseURL: "https://genshin-artifact-notes-default-rtdb.firebaseio.com",
  projectId: "genshin-artifact-notes",
  storageBucket: "genshin-artifact-notes.appspot.com",
  messagingSenderId: "1072946443893",
  appId: "1:1072946443893:web:5124e6f9c917ab476f2a3c",
  measurementId: "G-9ZG52CL3K3"
};

initializeApp(firebaseConfig);

store.dispatch("setUserAndNotes");
// const analytics = getAnalytics(app);
app.mount("#app");
