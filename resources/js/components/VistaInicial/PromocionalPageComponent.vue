<template>
<div class="margin">
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
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-secondary" type="submit">Search</button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  
    <div id="contenedores">
        <div  class="d-none d-md-block" style="width: 300px;height:434px;float:right;">
            <div class="row g-0">
              <div class="">
                  <img src="assets/Iteravia.png" class="" alt="..." style="width: 250px;height: 250px;">
              </div>
              <div class="">
                <div class="card-body">
                    <h3 class="card-title">Iterva</h3>
                    <p class="card-text">Descubre el mundo, ¡Viaja con un solo click!</p>
                    <!--<a href="#" class="btn btn-dark"></a>
                    <p class="card-text"><small class="text-muted">Cargo: </small></p>-->
                </div>
              </div>
            </div>
        </div>

           <div class="">
            <div class="row">
              <div class="col-md-12 card cards" style="width: 1000px;display: inline-block; ">
                  <div class="row g-0">
                    <div class="col-md-4">
                        <img src="assets/OIP (1).jpg" class="" alt="..." style="width: 200px;height: 200px;">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                          <h3 class="card-title">Titulo</h3>
                          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                              Necessitatibus reprehenderit aspernatur labore laborum officiis
                               vel veritatis iste, quisquam deleniti! Doloremque?</p>
                          <a href="#" class="btn btn-dark">Go somewhere</a>
                          <!--<p class="card-text"><small class="text-muted">Cargo: </small></p>-->
                      </div>
                    </div>
                  </div>
              </div>

         </div>

            <div class="row">
              <div class="col-md-12 card cards" style="width: 1000px;display: inline-block; ">
                <div class="row g-0">
                  <div class="col-md-4">
                      <img src="assets/mfe3w3n6s9801.jpg" class="" alt="..." style="width: 200px;height: 200px;">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">Titulo</h3>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Necessitatibus reprehenderit aspernatur labore laborum officiis
                             vel veritatis iste, quisquam deleniti! Doloremque?</p>
                        <a href="#" class="btn btn-dark">Go somewhere</a>
                        <!--<p class="card-text"><small class="text-muted">Cargo: </small></p>-->
                    </div>
                  </div>
                </div>
            </div>

        </div>

         <div class="row">
                <div class="col card" >
                    <div class="card-footer" style="background-color: rgb(213, 27, 95,.9);display: flex;">
                    <div class="card-body text-light" style="text-align: center;">
                        <h1 class="card-title">¡UPS!</h1>
                        <p class="card-text">¿quieres ver más?</p>
                        <a href="#" class="">Iniciar Sesión</a>
                        <a href="#" class="">Registrarme</a>
                        </div>
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
        console.log("Component Promocional component")
    },
}
</script>
 <style>
        .margin{
            margin-top: -25px;
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
            margin: 1%;
        
            border-radius: 10px;
        }

        footer{
            background-color: coral;
            width: 100%;
            margin-left: 0;
            margin-top: 2%;
            padding-top: 10%;
            text-align: center;
        }

        .cards{
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        margin-top: 10px;
        }

        .cards:hover {
        -webkit-transform: scale(1.01) !important;
                transform: scale(1.01) !important;
        }

        .img{
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
        }
        
        .img:hover {
            -webkit-transform: scale(1.09) !important;
                    transform: scale(1.09) !important;
        }

</style>



