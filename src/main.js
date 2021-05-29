import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDaKKO1giyfPASFcOuzVnwEsdG73m7NBcA",
  authDomain: "auth-with-firebase-7e70e.firebaseapp.com",
  projectId: "auth-with-firebase-7e70e",
  storageBucket: "auth-with-firebase-7e70e.appspot.com",
  messagingSenderId: "370845394807",
  appId: "1:370845394807:web:5550d58e92d4c03790a372",
  measurementId: "G-DSJEMD1WK7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let app = "";
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
