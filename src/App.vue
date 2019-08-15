<template>
    <div>
        <h1>{{ message }}</h1>
        <tes></tes>
        <Jumbotron></Jumbotron>
        <buttonzz></buttonzz>
        <contentzz></contentzz>
    </div>

</template>

<script>
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import tes from './Login.vue'
import Jumbotron from './Jumbotron'
import buttonzz from './buttonzz.vue';
import contentzz from './content'

export default {
  data() {
    return {
      message: 'Hello world',
    };
  },
  components : {
      tes,
      Jumbotron, 
      buttonzz,
      contentzz
  }
};


</script>

<style scoped>

</style>