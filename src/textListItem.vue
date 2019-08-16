<template>
  <div id="fb-root">
    <div class="card ml-2 mb-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ wkwk.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">uploaded by : {{wkwk.userId.username}}</h6>
        <h6 class="card-subtitle mb-2 text-muted">Check this file..</h6>
        <a :href="'' + wkwk.link" class="card-link">Visit link</a>
       <div
            class="fb-share-button card-link"
            :href="'' + wkwk.link"
            data-layout="button_count"
            data-size="large"
          >
            <a target="_blank" :href="'' + wkwk.link" class="fb-xfbml-parse-ignore">Bagikan</a>
          </div>
        </div>
      </div>
    </div>
  <!-- <div id="fb-root">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ wkwk.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
                <div class="fb-share-button" :href="'' + wkwk.link" data-layout="button_count" data-size="large"><a target="_blank" :href="'' + wkwk.link" class="fb-xfbml-parse-ignore">Bagikan</a></div>
            </div>

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
    </div>
  <div></div>-->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tes: []
    };
  },
  props: ["wkwk"],
  created() {
    console.log(this.wkwk.title, " ===== ,,.,.,.,.,  ");
  }
};
</script>

<style scoped>
</style>