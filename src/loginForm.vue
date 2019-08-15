<template>

    <div class="col-sm">
<div class = "card mt-4 ml-5 mr-5" style="background-color: rgb(214, 214, 198); width:40%" >
        <div class="card-body" id="formLogin" >
            <form >
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd">
                </div>
                <center><button type="submit" class="btn btn-default" style="background-color: #0f0e0ec5; color : rgb(255, 255, 255);" v-on:click="login">login</button></center>
                <hr>
                <hr>
                <center><span>Doesn't have an account?</span></center>
                <center><span>Register <a href="#" v-on:click="registerForm">here</a> </span></center>
                <hr>     
            </form>
        </div>

        <div class="card-body" id="formRegister" >
            <form >
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input type="email" class="form-control">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control">
                </div>
                <div class="form-group">
                    <label for="pwd">Birthday:</label>
                    <input type="date" class="form-control">
                </div>
                <center><button type="submit" class="btn btn-default" style="background-color: #0f0e0ec5; color : rgb(255, 255, 255);" v-on:click="register">register</button> </center>
                <hr>
                <hr>
                <center><span>Already have an account?</span></center>
                <center><span>Login <a href="#" v-on:click="loginFormBack">here</a> </span></center>
                <hr>     
            </form>
        </div>

</div>
</div>    
</template>

<script>

export default {
  data() {
    return {
      message: 'ini component',
    };
  },
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