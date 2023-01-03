<template>
    <div>
      <div class="jumbotron jumbotron-fluid bg-info text-white text-center">
        <div class="container">
          <h1 class="display-3">Hostel Allotment System</h1>
          <p class="lead">Avoid manual allotment.</p>
        </div>
      </div>

      <div class="container-fluid content-row">
        <!-- Cards -->
        
         <div class="row">
          <div class="col-sm-12 col-lg-3">
            <div class="card  h-100">
              <img class="card-img-top img-fluid" src="../assets/hostel.jpg" alt="" />
              <div class="card-body">
                <h3 class="card-title">Hostels</h3>
                <p class="card-text">
                  Set numbert of rooms according to need.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-3">
            <div class="card  h-100">
              <img class="card-img-top img-fluid" src="../assets/rooms.jpg" alt="" />
              <div class="card-body">
                <h3 class="card-title">Rooms</h3>
                <p class="card-text">
                 One or more students can be alloted a single room as per your need.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-3">
            <div class="card  h-100">
              <img class="card-img-top img-fluid" src="../assets/ctree.jpg" alt="" />
              <div class="card-body">
                <h3 class="card-title">Information</h3>
                <p class="card-text">
                  You can send the allotment status mail to the students with their unique username and password in one single click.
                </p>
              </div>
            </div>
          </div>
           <div class="col-sm-12 col-lg-3">
            <div class="card  h-100">
              <img class="card-img-top img-fluid" src="../assets/upcomming.jpg" alt="" />
              <div class="card-body">
                <h3 class="card-title">Preference</h3>
                <p class="card-text">
                  More preference will be introduced in future for allotment.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
</template>
<script>

export default {
    name:'HomePage',

}
</script>