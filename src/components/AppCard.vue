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
    <h4>{{ title }}</h4>
    <h5>{{ originalTitle }}</h5>
    <span>{{ lang }}</span>
    <span>{{ vote_avg }}</span>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;
</style>
