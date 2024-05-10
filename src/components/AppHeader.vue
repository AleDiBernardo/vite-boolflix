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
    };
  },
  components: {
    AppSearchBar,
  },
  methods: {
    getResult() {
      if (this.store.userQuery !== "") {
        const params = {
          query: this.store.userQuery,
          api_key: "bca2cd4e0092d2eac7fdb4f97170e2fb",
          language: "it-IT",
        };

        this.getMovie(params, this.movieSearch);
        this.getSeries(params, this.seriesSearch);

        this.store.userQuery = "";
        this.store.placeHolder = "Es: Harry Potter";
      } else {
        this.store.placeHolder = "Cannot be empty";
      }
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

      let params = {
        api_key: "bca2cd4e0092d2eac7fdb4f97170e2fb",
        language: "it-IT",
      };
      let call;

      switch (this.links[this.activeIndex]) {
        case "TV Series":
          call = this.seriesDiscover;
          this.getSeries(params, call);
          break;
        case "Movies":
          call = this.movieDiscover;
          this.getMovie(params, call);
          break;
        case "Recently Added":
          this.getMovie(params, this.recentlyAddedMovie);
          this.getSeries(params, this.recentlyAddedSeries);
          break;
        case "Original":
          params = {
            with_networks: 213,
            api_key: "bca2cd4e0092d2eac7fdb4f97170e2fb",
            language: "it-IT",
          };
          this.getSeries(params, this.seriesDiscover);
          break;
        case "Home":
          this.getMovie(params, this.movieSearch);
          this.getSeries(params, this.seriesSearch);
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
        console.log("Movie: " + this.store.movieList);
      });
    },
    getSeries(params, call) {
      axios.get(call, { params }).then((resp) => {
        this.store.seriesList = resp.data.results;
        console.log("Series: " + this.store.seriesList);
      });
    },
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="navbar">
        <a href="#" class="logo">
          <img src="../assets/logo.png" alt="" />
        </a>
        <ul class="d-flex flex-row gap-3">
          <li v-for="(link, index) in links" @click="activateLink(index)">
            <a href="#" :class="{ active: index === activeIndex }">{{
              link
            }}</a>
          </li>
        </ul>
      </div>
      <AppSearchBar @filter="getResult" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

header {
  @include flex(row, center, center);

  width: 100%;
  height: $header-heigth;
  padding: 10px 0;
  background-color: $primary-color;

  .container {
    @include flex(row, space-between, center);

    .logo {
      max-width: 150px;
    }
    ul {
      align-self: center;
      margin: 0;
      li {
        a {
          color: lightgray;
          &:hover {
            color: red;
          }
        }
      }
    }

    .active {
      color: white;
      font-weight: bold;
    }
  }
}
</style>
