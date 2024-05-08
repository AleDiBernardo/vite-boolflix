<script>
import AppSearchBar from "./AppSearchBar.vue"
import {store} from "../store.js" 
import axios from "axios"

export default{
    data(){
        return{
            store
        }
    },
    components:{
        AppSearchBar
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

            this.store.userQuery = ""
        }
    }
}
</script>

<template>
<header>
<div class="container">
    <div class="logo">
        <span>LOGO</span>
    </div>
    <AppSearchBar @filter="getResult"/>
    
</div>
</header>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;



header{
    height: $header-heigth;
    padding: 10px 0;
    background-color: $primary-color;
    @include flex(row,center,center);
    
    .container{
        @include flex(row,space-between,center);
    }
}


</style>