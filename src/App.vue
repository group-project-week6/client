<template>
    <div>
        <h1>{{ message }}</h1>
        <tes></tes>
    </div>

</template>

<script>


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import tes from './Login.vue'
export default {
  data() {
    return {
      message: 'Hello world',
    };
  },
  components : {
      tes
  }
};


</script>

<style scoped>

</style>