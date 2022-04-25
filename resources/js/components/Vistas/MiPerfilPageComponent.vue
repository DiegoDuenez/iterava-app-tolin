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
                        <router-link class="nav-link" aria-current="page" to="/Main">Home</router-link>
                       <!-- <a class="nav-link disabled" aria-current="page" href="#">Home</a>-->
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link disabled" aria-current="page" to="/Perfil">Perfil</router-link>
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

        </div>
    </nav>
    <div class="container marg">
     <div class="row">
        <div class="col-md-12 col">
          <div class="card text-center">
              <div class="card-header">
                Mi perfil
              </div>
              <div class="card-body">
                <h5 class="card-title">Mi nombre</h5>
                 <img class="rounded-circle img" src="assets/Perfil.png">
                <p class="card-text">Correo</p>
                <router-link class="btn btn-dark"  to="/registro">Cerrar Sesión</router-link>
                <!--<a href="#" class="btn btn-dark">Cerrar Sesión</a>-->
                <br>
                <br>
                <hr>
                <h5>Editar</h5>
                <form col-md-5>

                  <div class="row">
                    <div class="col-md-6">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">Introduzca el nuevo correo electronico.</div>
                  </div>
                  <div class="col-md-6">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                    <div id="emailHelp" class="form-text">Introduzca la nueva contraseña.</div>
                  </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-md-6">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">Repita el correo electronico.</div>
                  </div>
                  <div class="col-md-6">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                    <div id="emailHelp" class="form-text">Repita la contraseña.</div>
                  </div>
                  </div>
                  <br>
                  <div class="row">
                    <div class="col-md-2 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <small class="form-check-label" for="exampleCheck1">Esta de acuerdo con estos cambios</small>
                  </div>
                  </div>
                  <br>
                  <div class="row">
                    <button type="submit" class="col-md-12 btn btn-outline-info">Submit</button>
                  </div>
                </form>
              </div>
              <div class="card-footer text-muted">
                I T  E R A V A
              </div>
          </div>
        </div>
        </div>
        
      
    </div>
</div>
    
</template>
<script>
export default {
    mounted(){
        console.log("Component Perfil mounted")
    },
}
</script>

<style>
    .card{
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
    border-radius: 20px;
   
}

.card:hover {
  -webkit-transform: scale(1.01) !important;
          transform: scale(1.01) !important;
      }
.img{height:200px;
     width: 200px;
}
body {
    overflow-x:hidden;
}
.marg{
  margin-top: 20px;
  margin-bottom:100px;
}
</style>