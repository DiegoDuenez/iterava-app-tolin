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
                        <a class="nav-link disabled" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Perfil</a>
                    </li>
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

    <div class="main-container">
        <section class="col-md-4 col favlist">
            <h1 class="favlist__title">Favoritos</h1>
            <div class="favlist__container">
                <div class="favlist__card">
                    <div class="favlist__img">
                        <img src="assets/paisaje.jpg">
                    </div>
                    <div class="favlist__content">
                        <div class="favlist__header">
                            <p class="favlist__text--fs-1-3">Restaurante Equis</p>
                            <p class="favlist__text--fs-1">Torreón, Coahuila</p>
                        </div>
                        <div class="favlist__footer">
                            <div class="favlist__item">
                                <i class="fas fa-star"></i>
                                <p class="favlist__text--fs-1-3">4.5</p>
                            </div>
                            <div class="favlist__item">
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="favlist__card">
                    <div class="favlist__img">
                        <img src="assets/paisaje.jpg">
                    </div>
                    <div class="favlist__content">
                        <div class="favlist__header">
                            <p class="favlist__text--fs-1-3">Restaurante Equis</p>
                            <p class="favlist__text--fs-1">Torreón, Coahuila</p>
                        </div>
                        <div class="favlist__footer">
                            <div class="favlist__item">
                                <i class="fas fa-star"></i>
                                <p class="favlist__text--fs-1-3">4.5</p>
                            </div>
                            <div class="favlist__item">
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="favlist__card">
                    <div class="favlist__img">
                        <img src="assets/paisaje.jpg">
                    </div>
                    <div class="favlist__content">
                        <div class="favlist__header">
                            <p class="favlist__text--fs-1-3">Restaurante Equis</p>
                            <p class="favlist__text--fs-1">Torreón, Coahuila</p>
                        </div>
                        <div class="favlist__footer">
                            <div class="favlist__item">
                                <i class="fas fa-star"></i>
                                <p class="favlist__text--fs-1-3">4.5</p>
                            </div>
                            <div class="favlist__item">
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="favlist__card">
                    <div class="favlist__img">
                        <img src="assets/paisaje.jpg">
                    </div>
                    <div class="favlist__content">
                        <div class="favlist__header">
                            <p class="favlist__text--fs-1-3">Restaurante Equis</p>
                            <p class="favlist__text--fs-1">Torreón, Coahuila</p>
                        </div>
                        <div class="favlist__footer">
                            <div class="favlist__item">
                                <i class="fas fa-star"></i>
                                <p class="favlist__text--fs-1-3">4.5</p>
                            </div>
                            <div class="favlist__item">
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="col-md-6 map__container d-none d-md-block">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14399.620094988086!2d-103.46152517998138!3d25.541540400579223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fd962251275c5%3A0x5a932fe068cbe88b!2sPrimero%20de%20Cobi%C3%A1n%20Centro%2C%2027000%20Torre%C3%B3n%2C%20Coahuila!5e0!3m2!1sen!2smx!4v1643774038000!5m2!1sen!2smx" allowfullscreen="" loading="lazy"></iframe>
        </section>

    </div>
    </div>
</template>
<script>
export default {
     mounted(){
        console.log("Component Favoritos mounted")
    },
    
}
</script>