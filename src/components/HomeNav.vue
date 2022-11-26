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
                    <router-link class="nav-link" to="/">Home</router-link>
                    <!-- <a class="nav-link active" aria-current="page" href="/"><i class="bi bi-house-fill me-2"></i>Home</a> -->
                  </li>
                  <li class="nav-item rounded">
                    <router-link class="nav-link" to="Student_login">Student Login</router-link>
                    <!-- <a class="nav-link" href="Student_login"><i class="bi bi-people-fill me-2"></i>Student Login</a> -->
                  </li>
                  <li class="nav-item rounded">
                    <router-link class="nav-link" to="Admin_Login">Admin Login</router-link>
                    <!-- <a class="nav-link" href="Admin_Login"><i class="bi bi-telephone-fill me-2"></i>Admin Login</a> -->
                  </li>
                  <li class="nav-item rounded">
                    <router-link class="nav-link" to="Admin_registration">Admin Registeration</router-link>
                    <!-- <a class="nav-link" href="Admin_registration"><i class="bi bi-telephone-fill me-2"></i>Admin Registeration</a> -->
                  </li>
                 
                </ul>
              </div>
            </div>
          </nav>
         
    </div>
</template>
<script>
export default {
    name:'HomeNav',
}
</script>
<style scoped>
.navbar-brand {
    background-image: url("../assets/logo.png");
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