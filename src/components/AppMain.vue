<script>
import AppCard from "./AppCard.vue";
import { store } from "../store.js";
export default {
  components: {
    AppCard,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getFlag(curMovie) {
      let flag = "";
      switch (curMovie) {
        case "en":
          flag = "uk.svg";
          console.log("uk");
          break;
        case "pt":
          flag = "pt.svg";
          console.log("pt");
          break;
        case "it":
          flag = "it.svg";
          console.log("it");
          break;
        case "fr":
          flag = "fr.svg";
          console.log("fr");
          break;
        case "us":
          flag = "us.svg";
          console.log("us");
          break;

        default:

          break;
      }

      return flag;
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row row-cols-lg-4 row-cols-md-3 row-cols-2">
        <div class="col p-2" v-for="curMovie in store.movieList">
          <AppCard
            class="p-2"
            :title="curMovie.title"
            :originalTitle="curMovie.original_title"
            :flag="getFlag(curMovie.original_language)"
            :vote_avg="curMovie.vote_average"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.container {
  @include flex(row, space-between, center);
  .col {
    height: 300px;
  }
}
</style>
