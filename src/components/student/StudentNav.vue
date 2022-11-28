<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
             </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-md-auto gap-2">
                  <li class="nav-item rounded">
                    <router-link class="nav-link active" v-bind:to="home">Student Dashboard</router-link>
                  
                  </li>
                  <li class="nav-item rounded">
                    <a class="nav-link active" aria-current="page" @click="logout"><i class="bi bi-house-fill me-2"></i>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
         
    </div>
</template>
<script>
export default {
    name:'StudentNav',
    data(){
    return{
      home:`/student/${this.$route.params.uid}`,
    }
    },
    methods:{
  logout(){
    localStorage.removeItem("student_status");
    localStorage.removeItem("student_name");
    localStorage.removeItem("student_fathername");
    localStorage.removeItem("student_room");
    localStorage.removeItem("student_college");
    this.$router.push('/Student_login')
  }
}
}
</script>
<style scoped>
.navbar-brand {
    background-image: url("../../assets/logo.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 48px;
    height: 48px;
  }
  
  .navbar-nav .nav-item:hover {
    background-color: rgba(180, 190, 203, 0.4);
  }
  
</style>