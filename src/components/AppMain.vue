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
      <div class="row row-cols-lg-4 row-cols-md-3 row-cols-2" v-if="(store.movieList !== null || store.seriesList !== null)">
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
      <div id="search" v-else>
        <h1>Search for something</h1>
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
    background-color: black;
    // background-image: url(../assets/pattern.jpg);
    
    

    .container {
      @include flex(row, space-between, center);
      h1{
        color: white;
      }

      #search{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

      }
    }
}
</style>
