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
    <input type="text" class="form-control" @keyup.enter="$emit('filter')" v-model="this.store.userQuery" :placeholder="this.store.placeHolder">
    <input type="button" class="btn btn-outline-danger" value="Search" @click="$emit('filter')">
</div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
.btn {
    color: red;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 15px;

    &:hover{
        background-color: red;
    }
}

</style>