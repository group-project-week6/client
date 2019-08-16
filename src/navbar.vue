<template>
            <nav class="navbar navbar-expand-lg navbar-light" style="background-color: white ; padding: 10px">
                <div  class = "navbar-collapse justify-content-center">
                    <a class="navbar-brand" href="#" @click="pindah_page('home')"><h1>8shared</h1></a>
                </div>
                <div class = "navbar-collapse justify-content-end"  >
                    <ul class="nav nav-pills ">
                        <li class="nav-item" v-if="!isLogin">
                            <a class="nav-link active"  style="background-color: rgb(76, 160, 21)" href="#" @click="pindah_page('login')" >Login</a>
                        </li>
                        <li class="nav-item" v-else>
                            <a class="nav-link active"  style="background-color: rgb(76, 160, 21)" href="#" @click="logOut()" >Sign Out</a>
                        </li>
                    </ul>
                </div>
            </nav>
        


</template>
<script>

export default {
  data() {
    return {
      message: 'ini component',
    };
  },
  methods : {
      pindah_page(page){
          this.$emit('l' , page)
      },
      logOut(){
          console.log('kdsmfkdsmfkdsmfdkmfksmf')
          localStorage.clear()
          this.pindah_page('login')
          this.$emit('l' , 'login')
      }
  },
  props : ['isLogin']
};

</script>

<style scoped>
   
</style>