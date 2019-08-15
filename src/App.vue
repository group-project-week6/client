<template>
    <div>
        <navbar></navbar>
        <login></login>
        <loginForm></loginForm>
    </div>

</template>

<script>

import navbar from './navbar.vue'
import login from './Login.vue'
import loginForm from './loginForm.vue'
export default {
  data() {
    return {
      message: 'Hello world'
    };
  },
  components : {
      navbar,
      login,
      loginForm
  }
};


</script>

<style scoped>

</style>