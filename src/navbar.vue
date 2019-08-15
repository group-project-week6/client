<template>
            <nav class="navbar navbar-expand-lg navbar-light" style="background-color: white ; padding: 10px">
                <div  class = "navbar-collapse justify-content-center">
                    <a class="navbar-brand" href="#"><h1>8shared</h1></a>
                </div>
                <div class = "navbar-collapse justify-content-end"  >
                    <ul class="nav nav-pills ">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    
                        <li class="nav-item" >
                            <a class="nav-link active"  style="background-color: rgb(76, 160, 21)" href="#" v-on:click="registerForm">Sign Out</a>
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
};

</script>

<style scoped>
   
</style>