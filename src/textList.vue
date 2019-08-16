<template>
    <div class="row">
        <textListItem  v-for="list in listText"
        :key="list._id"
        :list="list">

        </textListItem>
    </div>
</template>

<script>
    import axios from 'axios';
    import textListItem from './textListItem'
    export default {
        data(){
            return {
                tes : []
            }
        },
        components : {
            textListItem
        },
        props : ['listText'],
        created(){
            console.log(this.listText , ' ===========')
        }
    }
</script>

<style scoped>

</style>