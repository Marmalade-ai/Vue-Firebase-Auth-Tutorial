<template>
    <div>
        <!-- Logged in: -->
        <!-- <b-button v-b-popover.hover.top="'Click to sign out' + signOut"></b-button> -->
        <button @click="signOut()">Click to sign out</button>
        <!-- <button @click="myFunction()">Click me</button> -->

        <div v-if="loggedIn">{{ getUserEmail }}</div>
        <div v-else>(anonymous)</div>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    created() {
        firebase.auth().onAuthStateChanged(user => {
            this.loggedIn = !!user;
            //   if (user) {
            //     this.loggedIn = true;
            //   } else {
            //     this.loggedIn = false;
            //   }
        });
    },
    data() {
        return {
            loggedIn: false,
        };
    },
    methods: {
        async signOut() {
            try {
                const data = await firebase.auth().signOut();
                console.log(data);
                this.$router.push('/login');
            } catch (err) {
                console.log(err);
            }
        },
    },
    computed: {
        getUserEmail() {
            return firebase.auth().currentUser.email;
        },
    },
};
</script>

<style lang="scss" scoped></style>
