<script>
import AppSearchBar from "./AppSearchBar.vue"
import {store} from "../store.js" 
import axios from "axios"

export default{
    data(){
        return{
            store,
            links: ["Home","TV Series","Films","Original","Recently Added", "My Watchlist"]
        }
    },
    components:{
        AppSearchBar
    },
    methods:{
        getResult(){
            if (this.store.userQuery !== '') {
                
                const params = {
                    query: this.store.userQuery,
                    api_key: "bca2cd4e0092d2eac7fdb4f97170e2fb",
                    language: "it-IT"
                }
    
                axios.get("https://api.themoviedb.org/3/search/movie",{params}).then((resp)=>{
                    this.store.movieList = resp.data.results;
                    console.log("Movie: " + this.store.movieList);
                })
                axios.get("https://api.themoviedb.org/3/search/tv",{params}).then((resp)=>{
                    this.store.seriesList = resp.data.results;
                    console.log("Series: " + this.store.seriesList);
                })
    
                this.store.userQuery = ""
                this.store.placeHolder = "Es: Harry Potter"

            } else{
                this.store.placeHolder = "Cannot be empty"
            }
            
        }
    }
}
</script>

<template>
<header>
<div class="container">
    <div class="navbar">

        <a href="#" class="logo">
            <img src="../assets/logo.png" alt="">
        </a>
    <ul class="d-flex flex-row gap-3">
        <li v-for="link in links"><a href="#">{{ link }}</a></li>
    </ul>
    </div>
    <AppSearchBar @filter="getResult"/>
    
</div>
</header>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;



header{
    @include flex(row,center,center);

    width: 100%;
    height: $header-heigth;
    padding: 10px 0;
    background-color: $primary-color;
    

    
    .container{
        @include flex(row,space-between,center);

        .logo{
            max-width: 150px;
        }
        ul{
            align-self: center;
            margin: 0;
        }
    }
}


</style>