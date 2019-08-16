<template>
    <div>
        <navbar @l="isLoginB($event)" v-bind:isLogin="isLogin"></navbar>
        <login v-if="onPage == 'home'" @l="isLoginA($event)" v-bind:isLogin="isLogin" v-bind:onPage="onPage"></login>
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
      console.log('here')
      this.isLogin = true
      this.onPage = page
    },
    isLoginB(page){
      // if(!page){
      //   this.isLogin = false
      //   this.onPage = 'login'
      // }else if(this.isLogin) {
      //   console.log('ini kepanggil')
      //   this.isLogin = true
      //   this.onPage = page
      // }else {
      //   this.onPage = page
      // }
      this.isLogin = false
      this.onPage = page
    }
  },
  created(){
    if(localStorage.getItem('token')){
      this.isLogin = true
      this.onPage = 'home'
    }else {
      this.isLogin = false
      this.onPage = 'login'
    }
  }
};


</script>

<style scoped>

</style>