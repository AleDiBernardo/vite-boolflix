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
            :lang="curMovie.original_language"
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
}
</style>
