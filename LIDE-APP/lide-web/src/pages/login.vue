<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-text-field
          label="Username"
          outlined
          v-model="username"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-btn color="blue" @click="login()">Se connecter</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Login",

  data() {
    return {
      username: "noname",
    };
  },
  methods: {
    login: function () {
      this.$store.dispatch('user/setUsername', this.username);
      this.$store.dispatch('user/createUser',this.$store);
      this.$router.push('/app');

    }
  }
};
</script>
<style>
</style>