<template>
    <div class="card ml-2 mb-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ wkwk.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">uploaded by : {{wkwk.userId.username}}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Check this file..</h6>
            <a :href="'' + wkwk.link" class="card-link">Visit link</a>
            <a href="#" class="card-link">Another link</a>
            <div class="fb-share-button"
                data-href="https://developers.facebook.com/docs/plugins/"
                data-layout="button_count">
                        
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                tes : []
            }
        },
        props : ['wkwk'],
        created(){
            console.log(this.wkwk.title , ' ===== ,,.,.,.,.,  ')
        }
    }
</script>

<style scoped>

</style>