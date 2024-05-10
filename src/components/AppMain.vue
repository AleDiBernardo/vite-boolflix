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
  <main >
    <div class="container" :class="{pb: store.isToggler && !store.isWatchlist}">
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
      
    </div>
    <div class="container h-100" :class="{pb: store.isToggler}" v-if="store.isWatchlist">
      <div id="search" class="gap-4">
        <img src="../assets/user.png" alt="">
        <h1>Search for something</h1>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;


main{
    overflow-y: scroll;
    // padding: 30px 0;
    height: calc(100vh - $header-heigth);
    background-color: black;
   
    .pb{
      padding-bottom: 260px
    }
    

    .container {
      @include flex(row, center, center);
      h1{
        color: white;
      }

      #search{
        @include flex(column,center,center);
        // transform: translate(-50%, -50%);

        img{
          border-radius: 10px;
        }

      }

     
    }
}
</style>
