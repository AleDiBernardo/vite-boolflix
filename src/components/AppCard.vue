<script>
export default {
  props: {
    title: String,
    originalTitle: String,
    lang: String,
    vote_avg: Number,
  },
};
</script>

<template>
  <div class="card">
    <h4>Title: {{ title }}</h4>
    <h5>Original Title: {{ originalTitle }}</h5>
    <h6>Original Language: {{ lang }}</h6>
    <h6>Vote: {{ vote_avg }}</h6>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.card{
    @include flex(column,flex-start,flex-start);
    height: 100%;    
}
</style>
