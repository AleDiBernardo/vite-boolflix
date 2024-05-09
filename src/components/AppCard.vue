<script>
export default {
  props: {
    results: Object,
  },
  computed: {
    Image() {
      return `https://image.tmdb.org/t/p/w342${this.results.poster_path}`;
    },
    
  },
  data() {
    return {
      isFlag: true,
      roundedVote: Math.ceil(this.results.vote_average / 2),
      maxCharLimit: 150
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
    limitChars(value,maxLength){
      if (!value) return '';
      if (value.length <= maxLength) return value;
      return value.substring(0, maxLength) + '...';
    }
  },
};
</script>

<template>
  <div class="card">
    <div class="card-inner">
      <div v-if="results.poster_path" class="card-front">
        <img :src="Image" alt="" class="thumb" />
      </div>

      <div v-else class="card-front notFound">
        <h5>Thumb not found</h5>
      </div>

      <div class="card-back">
        <h2 v-if="results.title">Movie</h2>
        <h2 v-else>Series</h2>

        <h4 v-if="results.title">{{ results.title }}</h4>
        <h4 v-else>{{ results.name }}</h4>

        <h5 v-if="results.original_title">{{ results.original_title }}</h5>
        <h5 v-else>{{ results.original_name }}</h5>

        <img v-if="isFlag" :src="getFlag(results.original_language)" alt="" />
        <h6 v-else>Non Disponibile</h6>
        <div>{{ limitChars(results.overview,this.maxCharLimit) }}</div>
        <div class="d-flex">
          Vote:
          <ul class="d-flex flex-row gap-1">
            <li v-for="_ in this.roundedVote" v-if="this.roundedVote > 0">
              <i class="fa-solid fa-star"></i>
            </li>
            <li v-else>
              No reviews
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.card {
  @include flex(column, space-between, flex-start);
  height: 100%;
  border: none;
  perspective: 1000px;

  .card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
    transform-style: preserve-3d;
  }

  &:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-back {
    display: none;
    background-color: black;
    color: white;
    height: 100%;
    border-radius: 5px;
    padding: 5px;

    img {
      max-width: 15%;
    }

    ul{
      padding-left: 5px;
    }

    ul > li{
      list-style-type: none;

      i{
        color: yellow;
      }
    }

  }

  &:hover .card-back {
    display: block;
    transform: scaleX(-1);
  }

  &:hover .card-front,
  &:hover .card-front.notFound {
    display: none;
  }

  .card-front {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    @include flex(column, space-between, flex-start);
  }

  .thumb {
    max-width: 15%;
    height: 100%;
    border-radius: 5px;
  }

  .card-front.notFound {
    background-color: lightgray;
    border-radius: 5px;

    @include flex(row, center, center);
  }

  .thumb {
    max-width: 100%;
  }
}
</style>
