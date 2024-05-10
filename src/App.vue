<script>
import { store } from "./store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    };
  },
  created() {},
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss"></style>
