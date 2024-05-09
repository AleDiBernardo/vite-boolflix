<script>
import {store} from "./store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"

export default{
    components:{
        AppHeader,
        AppMain
    },
    data(){
        return{
            store,
        }
    },
    created(){
        // this.getMovie()
    },
    methods:{
        getMovie(){
            const params = {
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
        }
    }
}
</script>

<template>
<AppHeader/>
<AppMain/>
</template>

<style lang="scss">

</style>
