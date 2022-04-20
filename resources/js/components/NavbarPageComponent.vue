<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light" style="position:fixed; width: 100%;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="recursos/Iteravia.png" alt="" width="30" height="24"></a>
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
</template>

<script>
export default {
    mounted(){
        console.log("Component Navbar component")
    },
}
</script>

   <style>
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



