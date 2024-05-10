<script>
import AppSearchBar from "./AppSearchBar.vue";
import { store } from "../store.js";
import axios from "axios";


export default {
  data() {
    return {
      store,
      links: [
        "Home",
        "TV Series",
        "Movies",
        "Original",
        "Recently Added",
        "My Watchlist",
      ],
      activeIndex: 0,
      movieSearch: "https://api.themoviedb.org/3/search/movie",
      seriesSearch: "https://api.themoviedb.org/3/search/tv",
      movieDiscover: "https://api.themoviedb.org/3/discover/movie",
      seriesDiscover: "https://api.themoviedb.org/3/discover/tv",
      recentlyAddedMovie: "https://api.themoviedb.org/3/movie/now_playing",
      recentlyAddedSeries: "https://api.themoviedb.org/3/tv/popular",
      params: {
        api_key: "bca2cd4e0092d2eac7fdb4f97170e2fb",
        language: "it-IT",
      },
    };
  },
  created() {
    this.getMovie(this.params, this.movieDiscover);
    this.getSeries(this.params, this.seriesDiscover);
    
  },
  components: {
    AppSearchBar,
  },
  methods: {
    getResult() {
      if (this.store.userQuery !== "") {
        this.params.query = this.store.userQuery;

        this.getMovie(this.params, this.movieSearch);
        this.getSeries(this.params, this.seriesSearch);

        this.store.userQuery = "";
        this.activeIndex = null;

        const placeHolders = [
          "Es: Harry Potter",
          "Es: Flintstone",
          "Es: Ozark",
          "Es: Kung Fu Panda",
          "Es: The Simpsons",
          "Es: Arcane",
        ];
        const arrLength = placeHolders.length;
        this.store.placeHolder =
          placeHolders[this.randomIntFromInterval(0, arrLength - 1)];
      } else {
        this.store.placeHolder = "Cannot be empty";
      }
    },
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    activateLink(index) {
      if (this.activeIndex !== null) {
        this.activeIndex = null;
      }
      this.activeIndex = index;

      this.getCurrentInfo();
    },
    getCurrentInfo() {
      this.store.movieList = [];
      this.store.seriesList = [];
      this.params.with_networks = null;
      this.store.isWatchlist = false;

      let call;

      switch (this.links[this.activeIndex]) {
        case "TV Series":
          call = this.seriesDiscover;
          this.getSeries(this.params, call);
          break;
        case "Movies":
          call = this.movieDiscover;
          this.getMovie(this.params, call);
          break;
        case "Recently Added":
          this.getMovie(this.params, this.recentlyAddedMovie);
          this.getSeries(this.params, this.recentlyAddedSeries);
          break;
        case "Original":
          this.params.with_networks = 213;
          this.getSeries(this.params, this.seriesDiscover);
          break;
        case "Home":
          this.getMovie(this.params, this.movieDiscover);
          this.getSeries(this.params, this.seriesDiscover);
          break;
        case "My Watchlist":
          this.store.isWatchlist = true;
          break;
        default:
          this.store.movieList = [];
          this.store.seriesList = [];
          break;
      }
    },
    getMovie(params, call) {
      axios.get(call, { params }).then((resp) => {
        this.store.movieList = resp.data.results;
        // console.log("Movie: " + this.store.movieList);
      });
    },
    getSeries(params, call) {
      axios.get(call, { params }).then((resp) => {
        this.store.seriesList = resp.data.results;
        // console.log("Series: " + this.store.seriesList);
      });
    },
  },
};
</script>

<template>

  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="" class="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="store.isToggler = !store.isToggler "
      >
        <span class="navbar-toggler-icon" id="toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
          <li v-for="(link, index) in links" @click="activateLink(index)">
            <a href="#" :class="{ active: index === activeIndex }">{{
              link
            }}</a>
          </li>
         
        </ul>
        <AppSearchBar @filter="getResult" />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

nav {
  background-color: black;
  min-height: $header-heigth;

  .active {
    color: white;
    font-weight: bold;
  }
  .logo {
    max-width: 150px;
  }

  #toggler-icon {
    background-color: red;
    border-radius: 5px;
  }
}
</style>
