<template>
    <div>
        <HomeNav/>
        <router-view></router-view>
        <!-- footer -->
        <div class="bg-dark text-white footer">
            <p class="text-center p-4 m-0">Footer Content</p>
          </div>
    </div>
</template>

<script>
import HomeNav from './HomeNav.vue'
export default {
name: 'HomeVue',
components:{
    HomeNav
}
}
</script>
<style scoped>
.footer{
    margin-top:20px;
}
</style>