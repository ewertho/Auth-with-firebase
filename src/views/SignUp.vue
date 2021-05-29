<template>
  <div class="sign-up">
    <h1>Criar uma nova conta</h1>
    <p></p>
    <input type="text" placeholder="email" v-model="email" />
    <p></p>
    <input type="password" placeholder="senha" v-model="password" />
    <p></p>
    <button @click="signUp">Registrar</button>
    <p>ou <router-link to="/login">retorne ao login</router-link></p>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.replace({ name: "home" });
            alert(`Bem vindo ${this.email}`);
          },
          (err) => {
            alert("Aconteceu algo de inesperado..." + err.message);
          }
        );
    },
  },
};
</script>
<style></style>
