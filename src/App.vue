<template>
    <div>
        <navbar @l="isLoginA($event)"></navbar>
        <login v-if="onPage == 'home'"></login>
        <loginForm v-bind:onPage="onPage" @p="isLoginA('home')" ></loginForm>
        <!-- v-else-if="onPage == 'register' " -->
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
  },
  data : {
    isLogin : false,
    onPage : 'home'
  },
  methods : {
    isLoginA(page){
      this.onPage = page
    }
  },
  created(){
    if(localStorage.getItem('token')){
      this.onPage = 'home'
    }else {
      this.onPage = 'login'
    }
  }
};


</script>

<style scoped>

</style>