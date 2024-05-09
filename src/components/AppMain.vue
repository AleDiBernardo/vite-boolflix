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
            :results="curMovie"
          />
        </div>
        <div class="col p-2" v-for="curSeries in store.seriesList">
          <AppCard
            :results="curSeries"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;


main{
    overflow: scroll;
    padding: 30px 0;
    height: calc(100vh - $header-heigth);

    .container {
      @include flex(row, space-between, center);
      // .col {
      //   min-height: 300px;
      // }
    }
}
</style>
