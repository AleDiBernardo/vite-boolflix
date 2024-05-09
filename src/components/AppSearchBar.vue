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
<div class="d-flex gap-1">
    <input type="text" class="form-control" v-model="this.store.userQuery" :placeholder="this.store.placeHolder">
    <input type="button" class="btn" value="Search" @click="$emit('filter')">
</div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
.btn {
    background-color: red;
    color: white;
    text-transform: uppercase;
    font-size: 15px;
}

</style>