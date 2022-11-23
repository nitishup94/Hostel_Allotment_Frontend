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
                    <a class="nav-link active" aria-current="page" href="/admin"><i class="bi bi-house-fill me-2"></i>Admin Dashboard</a>
                  </li>
                  <li class="nav-item rounded">
                    <a class="nav-link active" aria-current="page" href="/admin/allotment_setting"><i class="bi bi-house-fill me-2"></i>Allotment Settings</a>
                  </li>
                  <li class="nav-item rounded">
                    <a class="nav-link active" aria-current="page" href="/admin/upload_data"><i class="bi bi-house-fill me-2"></i>Upload Data</a>
                  </li>
                  <li class="nav-item rounded">
                    <a class="nav-link active" aria-current="page" href="/"><i class="bi bi-house-fill me-2"></i>Start Allotment</a>
                  </li>
                  <li class="nav-item rounded">
                    <a class="nav-link active" aria-current="page" href="/"><i class="bi bi-house-fill me-2"></i>Generate Report</a>
                  </li>
                  <li class="nav-item rounded">
                    <a class="nav-link active" aria-current="page" href="/"><i class="bi bi-house-fill me-2"></i>Update Allotment</a>
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