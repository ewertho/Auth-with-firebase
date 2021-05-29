<template>
  <div class="login">
    <h1>Login</h1>
    <br />
    <input type="text" placeholder="Email" v-model="email" />
    <p></p>
    <input type="password" placeholder="Senha" v-model="password" />
    <p></p>
    <div class="btn-login">
      <button @click="login">Login</button>
    </div>
    <p>
      Não tem cadastro?
      <span> <router-link to="/signup">Registre-se aqui</router-link>. </span>
    </p>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.replace({ name: "home" });
          },
          (err) => {
            alert(
              "Não foi possivel estabelecer uma conexão, erro: " + err.message
            );
          }
        );
    },
  },
};
</script>
<style></style>
