<script>
import AppSearchBar from "./AppSearchBar.vue"
export default{
    components:{
        AppSearchBar
    }
}
</script>

<template>
<header>
<div class="container">
    <div class="logo">
        <span>LOGO</span>
    </div>
    <AppSearchBar/>
    
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