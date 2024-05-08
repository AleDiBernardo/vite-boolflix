<script>
import {store} from "../store.js" 

export default{
    data(){
        return{
            store
        }
    },
    
}
</script>

<template>
<div>
    <input type="text" v-model="this.store.userQuery" placeholder="Es: Harry Potter">
    <input type="button" value="Search" @click="$emit('filter')">
</div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;

</style>