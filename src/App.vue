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
        
    },


}
</script>

<template>
<AppHeader/>
<AppMain/>
</template>

<style lang="scss">

</style>
