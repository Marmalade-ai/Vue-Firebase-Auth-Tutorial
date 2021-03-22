import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: 'AIzaSyD3fW9Qf7jDS3gJyfzNWuy2b4SHMx6H2b0',
    authDomain: 'uploadtest2-ea7a4.firebaseapp.com',
    projectId: 'uploadtest2-ea7a4',
    storageBucket: 'uploadtest2-ea7a4.appspot.com',
    messagingSenderId: '1003592654757',
    appId: '1:1003592654757:web:d45899b7c04be906bcd24c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
