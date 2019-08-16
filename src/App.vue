<template>
    <div>
        <navbar @l="isLoginB($event)" v-bind:isLogin="isLogin"></navbar>
        <login v-if="onPage == 'home'" @l="isLoginA($event)" v-bind:isLogin="isLogin" v-bind:onPage="onPage" @br="kirim($event)"></login>
        <loginForm v-bind:onPage="onPage" @p="isLoginA($event)" ></loginForm>
        <textList    v-bind:objTemp="objTemp" v-bind:listText="listText" v-bind:listText2="listText2" @lol="filterdataText($event)"></textList>
        <!-- <textList   v-else></textList> -->
        <!-- v-else-if="onPage == 'register' " -->
    </div>

</template>

<script>

import axios from 'axios'
import navbar from './navbar.vue'
import login from './Login.vue'
import loginForm from './loginForm.vue';
import textList from './textList';
export default {
  data() {
    return {
      message: 'Hello world'
    };
  },
  components : {
      navbar,
      login,
      loginForm,
      textList
  },
  data : {
    isLogin : false,
    onPage : 'home',
    listText : [],
    objTemp : {},
    listText2 : []
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
      // this.isLogin = false
      this.onPage = page
    },
    kirim(data){
      console.log(  data, 'ini data nya di root =-=-=-=-=3-23=2-2=3-2=3-2=32-32=3-2=3-2=3-2= cccccc')
      // this.objTemp = data
      this.listText2.unshift(data)
      this.listText.unshift(data)
    },
    filterdataText(id){
      this.listText = this.listText.filter(el=> el._id != id  )
      this.listText2 = this.listText2.filter(el=> el._id != id  )
    }
  },
  mounted(){
    if(localStorage.getItem('token')){
            this.isLogin = true
            this.onPage = 'home'
      }else {
        this.isLogin = false
        this.onPage = 'login'
      }
    
  },
  created(){
    axios({
      method: "GET",
      url: "http://35.237.66.166/texts/all",
      headers: {
        token: localStorage.getItem("token")
      }
    })
      .then(text => {
        console.log(text, " ===========");
        this.listText = text.data;
        if(this.objTemp){
            this.listText.push(this.objTemp)
        }
        return axios({
          method: "GET",
          url: "http://35.237.66.166/texts/",
          headers: {
            token: localStorage.getItem("token")
          }
        }).then(text2 => {
          console.log(text2, " lfldfdlmfdkfm=p=-=-=-=-=-=-=");
          if(this.objTemp){
            this.listText2.push(this.objTemp)
            }
          this.listText2 = text2.data;
        //   console.log(listText);
        });
      })
      .catch(console.log);
  }
};


</script>

<style scoped>

</style>