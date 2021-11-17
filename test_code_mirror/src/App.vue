<template>
  <mirror></mirror>
</template>

<script>
import Mirror from './components/Mirror.vue'

export default {
  name: 'App',
  components:{
    'mirror' : Mirror
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
