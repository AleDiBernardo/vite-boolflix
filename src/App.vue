<script>
import {store} from "./store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue"
export default{
    components:{
        AppHeader
    },
    data(){
        return{
            store,
        }
    },
    created(){
        this.getMovie()
    },
    methods:{
        getMovie(){
            const params = {
                query: "kung fu panda",
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
<AppHeader/>
</template>

<style lang="scss">

</style>
