<template>

    <div class="col-sm">
<div class = "card mt-4 ml-5 mr-5" style="background-color: rgb(214, 214, 198); width:40%" >
        <div class="card-body" id="formLogin" v-if="onPage == 'login' " >
            <form v-on:submit.prevent="login">
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input type="email" class="form-control" id="email" v-model="email2">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" v-model="password2">
                </div>
                <center><button type="submit" class="btn btn-default" style="background-color: #0f0e0ec5; color : rgb(255, 255, 255);" >login</button></center>
                <hr>
                <hr>
                <center><span>Doesn't have an account?</span></center>
                <center><span>Register <a href="#" >here</a> </span></center>
                <hr>     
            </form>
        </div>

        <div class="card-body" id="formRegister" v-else-if="onPage == 'register' " >
            <form v-on:submit.prevent="register">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" v-model="username">
                </div>
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input type="email" class="form-control" v-model="email">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" v-model="password">
                </div>
                <div class="form-group">
                    <label for="pwd">Birthday:</label>
                    <input type="date" class="form-control">
                </div>
                <center><button type="submit" class="btn btn-default" style="background-color: #0f0e0ec5; color : rgb(255, 255, 255);" >register</button> </center>
                <hr>
                <hr>
                <center><span>Already have an account?</span></center>
                <center><span>Login <a href="#" >here</a> </span></center>
                <hr>     
            </form>
        </div>

</div>
</div>    
</template>

<script>
import { log } from 'util';
import axios from 'axios'
export default {
  data() {
    return {
      message: 'ini component',
      username : '',
      password : '',
      email : '',
      email2 : '',
      password2 : ''
    };
  },
  props : ['onPage'],
  methods : {
      register(){
          let { username ,  password ,  email } = this
          axios.post('http://localhost:3000/users/register',{
              username , password ,  email
          })
          .then(({data})=>{
              this.$emit('p' , data)
              console.log(data);
           })
           .catch(console.log)
      },
      login(){
          let {  password2 ,  email2 } = this
          axios.post('http://localhost:3000/users/login',{
             password  : password2,  email : email2
          })
          .then(({data})=>{
              localStorage.setItem('token' , data.token)
              this.$emit('p' , data)
              console.log(data);
           })
           .catch(console.log)
      }
  }
};

</script>

<style scoped>

a , .btn-primaryyy {
    background-color: #ec3360;
    border-color: #ec3360;
    border-radius: 5px;
    border: 1px solid #fff;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    text-transform: capitalize;
    outline: none;
    font-size: 16px;
    line-height: 50px;
    padding: 0 25px;
}



</style>