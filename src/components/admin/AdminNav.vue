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
                    <router-link class="nav-link active" v-bind:to="home">Admin Dashboard</router-link>
                  
                  </li>
                  <li class="nav-item rounded">
                    <router-link class="nav-link" v-bind:to="allotment_setting">Allotment Settings</router-link>
                  </li>
                  <li class="nav-item rounded">
                    <router-link class="nav-link" v-bind:to="upload_data">Upload Data</router-link>
                  </li>
                  <li class="nav-item rounded">
                    <router-link class="nav-link" v-bind:to="allotment_start">Start Allotment</router-link>
                  </li>
                  <li class="nav-item rounded">
                    <router-link class="nav-link" v-bind:to="generate_report">Generate Report</router-link>
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
    name:'AdminNav',
    data(){
      return{
        home:`/admin/${this.$route.params.id}`,
        allotment_setting:`/admin/${this.$route.params.id}/allotment_setting`,
        upload_data:`/admin/${this.$route.params.id}/upload_data`,
        allotment_start:`/admin/${this.$route.params.id}/allotment_start`,
        generate_report:`/admin/${this.$route.params.id}/generate_report`,
        
      }
    },
methods:{
  logout(){
    localStorage.removeItem("admin_status");
    this.$router.push('/Admin_Login')
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