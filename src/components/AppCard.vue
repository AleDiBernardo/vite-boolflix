<script>
export default {
  props: {
    movie: Object,
    series: Object,
  },
  data() {
    return {
      isFlag: true,
    };
  },
  methods: {
    getFlag(curMovie) {
      console.log(curMovie);
      let flag = "";
      switch (curMovie) {
        case "en":
          flag = "uk.svg";
          break;
        case "pt":
          flag = "pt.svg";
          break;
        case "it":
          flag = "it.svg";
          break;
        case "fr":
          flag = "fr.svg";
          break;
        case "us":
          flag = "us.svg";
          break;
        case "ja":
          flag = "jp.svg";
          break;

        default:
          this.isFlag = false;
          break;
      }

      return new URL(`../assets/${flag}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div v-if="movie" class="card">
    <h2>Movie</h2>
    <h4>{{ movie.title }}</h4>
    <h5>{{ movie.original_title }}</h5>
    <img v-if="isFlag" :src="getFlag(movie.original_language)" alt="" />
    <h6 v-else>Non Disponibile</h6>
    <h6>Vote: {{ movie.vote_average }}</h6>
  </div>
  <div v-if="series" class="card">
    <h2>Series</h2>

    <h4>{{ series.name }}</h4>
    <h5>{{ series.original_name }}</h5>
    <img v-if="isFlag" :src="getFlag(series.original_language)" alt="" />
    <h6 v-else>Non Disponibile</h6>
    <h6>Vote: {{ series.vote_average }}</h6>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.card {
  @include flex(column, space-between, flex-start);
  height: 100%;
  padding: 10px;
    background-color: lightcyan;
  img {
    max-width: 15%;
    border: 2px solid black;
    border-radius: 5px;
  }
}
</style>
