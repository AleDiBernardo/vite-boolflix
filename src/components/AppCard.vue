<script>
export default {
  props: {
    title: String,
    originalTitle: String,
    flag: String,
    vote_avg: Number,
  },
  methods:{
    getImgPath(flag){
        return new URL(`../assets/${flag}`, import.meta.url).href
    }
  }
};
</script>

<template>
  <div class="card">
    <h4>Title: {{ title }}</h4>
    <h5>Original Title: {{ originalTitle }}</h5>
    <img v-if="flag" :src="getImgPath(flag)" alt="">
    <h6 v-else>Non Disponibile</h6>
    <h6>Vote: {{ vote_avg }}</h6>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.card{
    @include flex(column,space-between,flex-start);
    height: 100%; 
    
    img{
        max-width: 15%;
    }
}
</style>
