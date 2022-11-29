<template>
    <div>
            <div class="container">
                <h1 class="display-2">404 Page Not Found !</h1>
                
                <router-link  class="display-4" to="/">Go to Home</router-link>
              </div>
     
    </div>
</template>
<script>
export default {
    name:'PageNotfound',
   
}
</script>
<style scoped>
.container{
  height: 100vh;
  font-family: "Montserrat", "sans-serif";
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>