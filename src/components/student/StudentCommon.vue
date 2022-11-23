<template>
    <div>
        <StudentNav />
        <router-view></router-view>
        <div class="bg-dark text-white">
            <p class="text-center p-4 m-0">Footer Content</p>
          </div>
    </div>
</template>

<script>
import StudentNav from './StudentNav.vue';
export default {
  components: { StudentNav },
    name: 'StudentCommon'
}
</script>