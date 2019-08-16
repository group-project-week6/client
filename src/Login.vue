<template>
    <div class="pt-5" style="background-color: #30353e; color: white ;height:100vh">
        <div v-if="!CheckedInput">
          <div class="pb-5">
            <center><h1>Share Your Code with Developers</h1></center>
            <center><h3>An online code sharing system for troubleshooting, teaching & more…</h3>
          </div>
          <center><a href="#" class="btn-primaryyy" @click="RenderInput">Share Code Now</a><center>
          <center><p><small>Share code for free.</small></p></center>
        </div>
        <div v-else>
          <div class="pb-5">
            <center><h1>Share Your Code with Developers</h1></center>
            <center><h3>An online code sharing system for troubleshooting, teaching & more…</h3>
          </div>
          <div class="pb-5">
            <form  enctype="multipart/form-data" v-on:submit.prevent="addText"> 
              <center><h1>Title: </h1><input type="text" placeholder="Your code title..." v-model="title"></center>  <br>
              <center> <input type="file"  @change="previewFile" id="file" ref="myFiles"></center>
              <!-- <center><a href="#" class="btn-primaryyy" @click="addText">Share Your Code</a><center> -->
              <center><input type="submit" class="btn-primaryyy" value="Share Your Code" ></center>
            </form>
            
          </div>
          <!-- <center><a href="#" class="btn-primaryyy" @click="addText">Share Your Code</a><center> -->
        </div>
    </div>   
    
    
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      message: 'ini component',
      CheckedInput : false,
      image : '',
      title : ''
    };
  },
  props : ['isLogin'],
  methods : {
    RenderInput(){
      if(this.isLogin){
        this.CheckedInput =  true
      }else {
        this.$emit('l' , 'login')
      }
    },
    addText(){
      console.log(this.image , ' ini')
      let {  image ,  title} = this
      console.log('ini this',title);
      console.log('lfdmkmfdskmf')
      console.log(localStorage.getItem('token'))

      var bodyFormData = new FormData();
      bodyFormData.append('image', image[0]); 
      console.log(bodyFormData);

      axios({
          method : 'POST',
          url : 'http://localhost:3000/images/upload',
          data : bodyFormData
          ,
          config : {headers: {
              token : localStorage.getItem('token')
          }}
      })
      .then(( {data})=>{
        return axios({
            method : 'POST',
            url : 'http://localhost:3000/texts',
            data : {
                title : this.title , link: data.link
            },
            headers: {
                token : localStorage.getItem('token')
            }
        })
      })
      .then(({data})=>{
        console.log(data);
        this.title = ""
      })
      .catch(console.log)
    },
    previewFile(){
      this.image = this.$refs.myFiles.files
      // console.log()
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