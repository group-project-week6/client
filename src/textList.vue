<template>
  <div>
    <div class="row pt-5 pl-5 pr-5">
      <textListItem v-for="wkwk in listText" :key="wkwk._id" :wkwk="wkwk"></textListItem>
    </div>

    <div class="row pt-5 pl-5 pr-5">
      <TextListItem2 v-for="item in listText2" :key="item._id" :item="item"></TextListItem2>
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
      listText: [],
      listText2: []
    };
  },
  props : ['objTemp'],
  components: {
    textListItem,
    TextListItem2
  },
  created() {
    axios({
      method: "GET",
      url: "http://localhost:3000/texts/all",
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
          url: "http://localhost:3000/texts/",
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
  },
  computed : {
      fn(){
          if(this.objTemp){
              this.listText.unshift(objTemp)
              this.listText2.unshift(objTemp)
          }
      }
  },
  watch : {
      li : function(){
          this
      }
  }
};
</script>

<style scoped>
</style>