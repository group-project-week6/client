<template>
    <div class="row">
        <textListItem  v-for="wkwk in listText"
        :key="wkwk._id"
        :wkwk="wkwk">

        </textListItem>
    </div>
</template>

<script>
    import axios from 'axios';
    import textListItem from './textListItem'
    export default {
        data(){
            return {
                tes : [],
                listText :  []
            }
        },
        components : {
            textListItem
        },
        created(){
            axios({
          method : 'GET',
          url : 'http://localhost:3000/texts/all',
          headers: {
              token : localStorage.getItem('token')
          }
        })
        .then((text)=>{
          console.log(text , ' ===========')
           this.listText = text.data
           console.log(listText)
          })
        .catch(console.log)
        }
    }
</script>

<style scoped>

</style>