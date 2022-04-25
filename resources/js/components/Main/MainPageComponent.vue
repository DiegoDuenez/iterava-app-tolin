<template>
<div class="back">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="width: 100%;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="assets/Iteravia.png" alt="" width="30" height="24"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                     <li class="nav-item">
                        <router-link class="nav-link disabled" aria-current="page" to="/Main">Home</router-link>
                       <!-- <a class="nav-link disabled" aria-current="page" href="#">Home</a>-->
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/Perfil">Perfil</router-link>
                        <!--<a class="nav-link" href="#">Perfil</a>-->
                    </li>
                    <li class="nav-item">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-secondary" type="submit">Search</button>
                        </form>
                    </li>
                </ul>
            </div>
            <router-link class="nav-link"  to="/Favoritos"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart"
                    viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg></router-link>
                <!--
            <a class="nav-link" href="#">
                </a>-->

        </div>
    </nav>


    <div id="arriba" class="d-none d-md-block">
        <img class="uno" src="assets/7.png">
        <img class="dos" src="assets/R.gif">
        <img class="logo" src="assets/Iteravia2.png">
    </div>


    <div id="container" style="margin-top:10px;" >
        
        <div class="row">

        <!--card-->
         <div class="col-md-4">
            <div class="card" style="width: 25rem;">
              <img src="assets/Montreal.jpg" class="imgs card-img-top" alt="...">
              <div class="card-body">
                <h5 class="text-muted">Montreal</h5>
                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#monte">
                  Saber más
                </button>
                </div> 
            </div>


                <!-- Modal -->
                <div class="modal fade" id="monte" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Montreal</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

            </div>

        <!--fin card-->

        <!--card-->
         <div class="col-md-4">
            <div class="card" style="width: 25rem;">
              <img src="assets/roma.jpeg" class="imgs card-img-top" alt="...">
              <div class="card-body">
                <h5 class="text-muted">Roma</h5>
                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#roma">
                  Saber más
                </button>
                </div> 
            </div>


                <!-- Modal -->
                <div class="modal fade" id="roma" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Roma</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

            </div>

        <!--fin card-->

        <!--card-->
         <div class="col-md-4">
            <div class="card" style="width: 25rem;">
              <img src="assets/paris.jpeg" class="imgs card-img-top" alt="...">
              <div class="card-body">
                <h5 class="text-muted">Paris</h5>
                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#paris">
                  Saber más
                </button>
                </div> 
            </div>


                <!-- Modal -->
                <div class="modal fade" id="paris" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Paris</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

            </div>

        <!--fin card-->
        </div>
         <div class="row" style="margin-top:10px;">
        <!--card-->
         <div class="col-md-4">
            <div class="card" style="width: 25rem;">
              <img src="assets/cabos.jpg" class="imgs card-img-top" alt="...">
              <div class="card-body">
                <h5 class="text-muted">Cabos</h5>
                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#cabos">
                  Saber más
                </button>
                </div> 
            </div>


                <!-- Modal -->
                <div class="modal fade" id="cabos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Cabos</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

            </div>

        <!--fin card-->
                <!--card-->
         <div class="col-md-4">
            <div class="card" style="width: 25rem;">
              <img src="assets/NY.jpg" class="imgs card-img-top" alt="...">
              <div class="card-body">
                <h5 class="text-muted">Nueva York</h5>
                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#ny">
                  Saber más
                </button>
                </div> 
            </div>


                <!-- Modal -->
                <div class="modal fade" id="ny" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Nueva York</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

            </div>

        <!--fin card-->
                <!--card-->
         <div class="col-md-4">
            <div class="card" style="width: 25rem;">
              <img src="assets/monte washington.jpg" class="imgs card-img-top" alt="...">
              <div class="card-body">
                <h5 class="text-muted">Monte Washington</h5>
                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#mw">
                  Saber más
                </button>
                </div> 
            </div>


                <!-- Modal -->
                <div class="modal fade" id="mw" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Monte Washington</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

            </div>

        <!--fin card-->
         </div>
        <div class="row">
            <div class="col">
                <footer style="margin-bottom: -40px;">
                    <small class="text-light">Developers | Energy ©</small>
                </footer>
            </div>
        </div>



    </div>

</div>

   
</template>

<script>
export default {
    mounted(){
        console.log("Component Main mounted")
    },
}
</script>

<style>
   .back{
       margin-top: -25px;
   }
    .card{
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
    border-radius: 20px;
   
}

.card:hover {
  -webkit-transform: scale(1.01) !important;
          transform: scale(1.01) !important;
      }
.imgs{height: 300px;
border-radius: 20px;
}
footer{
        background-image: linear-gradient(180deg, #f8fafc 0%, #fc3905 80%, #cd024c 100%);
        width: 100%;
        margin-left: 0;
        margin-top: 2%;
        padding-top: 10%;
        text-align: center;
    }
body {
    overflow-x:hidden;
}
#arriba {
    position: relative;
    top: 5%;
}
#arriba .uno{
    position:absolute;
    width: 120.6%;
    top: -50%;
    z-index: -1;
    margin-bottom: -15%;
    margin-left: -15%;
    margin-right: -15%;
    left: 0;
}

#arriba .dos{
    width: 100%;
    position: relative;
    z-index: -2;
    height: 378px;
}


#arriba .logo{
    z-index: -1;
    position: absolute;
    top: 30%;
    width: 30%;
    left: 35%;
}

#contenedores{
    width: 100%;
    display: inline-block;

}

#contenedores img{
    width: 30%;
    height: 300px; 
    border-radius: 10px;
}

</style>

   