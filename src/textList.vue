<template>
  <div>
     <center><h1 class="pt-5">All Codes</h1> </center>
    <div class="row pt-5 pl-5 pr-5">
      <textListItem v-for="wkwk in listText" :key="wkwk._id" :wkwk="wkwk"></textListItem>
    </div>
    <center><h1 class="pt-5">Your Codes</h1></center>
    <div class="row pt-5 pl-5 pr-5">
      <TextListItem2 v-for="item in listText2" :key="item._id" :item="item" @pol="deletetext($event)"></TextListItem2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import textListItem from "./textListItem";
import TextListItem2 from "./TextListItem2";
export default {
  data() {
    return {
      tes: [],
    //   listText: [],
    //   listText2: []
    };
  },
  props : ['objTemp' , 'listText' , 'listText2'],
  components: {
    textListItem,
    TextListItem2
  },
  created() {
      console.log(this.listText , this.listText2 , ' =- -=- =- =- =-')
  },
  methods : {
      deletetext(id){
          this.$emit('lol' , id)
      }
  }  
};
</script>

<style scoped>
</style>