<script>
import {store} from "../store.js" 
import axios from "axios";

export default{
    data(){
        return{
            store
        }
    },
    methods:{
        getResult(){
            const params = {
                query: this.store.userQuery,
                api_key: "bca2cd4e0092d2eac7fdb4f97170e2fb",
                language: "it-IT"
            }

            axios.get("https://api.themoviedb.org/3/search/movie",{params}).then((resp)=>{
                this.store.movieList = resp.data.results;
                console.log(this.store.movieList);
            })
        }
    }
}
</script>

<template>
<div>
    <input type="text" v-model="this.store.userQuery">
    <input type="button" value="Search" @click="getResult">
</div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;

</style>