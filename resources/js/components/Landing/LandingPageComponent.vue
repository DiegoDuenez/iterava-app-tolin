<template>
    <div class="landing">
        <div class="landing__nav">
            <!--<p style="color: white; font-size: var(--it-text)">
                <a href="" class="landing__link">Login</a>|<a href="" class="landing__link">Registrarse</a>
            </p>-->
            <router-link class="landing__link" to="/registro"
                >Login</router-link
            >
            <span>|</span>
            <a href="" class="landing__link">Registrarse</a>
        </div>
        <div class="landing__mask">
            <div class="landing__logo">
                <img src="assets/logo.png" alt="" />
            </div>
            <div class="landing__search">
                <input
                    type="search"
                    name=""
                    id=""
                    class="landing__input"
                    placeholder="¿Qué estas buscando?"
                />
                <router-link
                    class="landing__search-button"
                    to="/resultados"
                    tag="button"
                    ><i class="fa-solid fa-magnifying-glass"></i
                ></router-link>
            </div>
            <div class="landing__description">
                <p class="landing__text">
                    Bienvenid@ a Iterava, donde puedes conocer con tan solo un
                    clic los lugares más maravillosos al rededor del mundo, todo
                    esto en un mismo sitio, encuentralo aquí.
                </p>
                <button class="landing__button landing__button--orange">
                    EMPEZAR
                </button>
            </div>
        </div>

        <video autoplay muted loop id="myVideo" class="landing__video">
            <source src="assets/video1.mp4" type="video/mp4" />
        </video>

        <!--<div class="landing__banner">
            <video autoplay muted loop id="myVideo" class="landing__video">
                    <source src="assets/video1.mp4" type="video/mp4">
            </video>
            <div class="landing__mask">

            </div>
            <div class="landing__logo">
                <img src="assets/logo.png" alt="">
            </div>
             <div class="landing__search">
                <p>OLa</p>
            </div>
        </div>-->

        <!--<div class="landing__banner">
            <video autoplay muted loop id="myVideo" class="landing__video">
                    <source src="assets/video1.mp4" type="video/mp4">
            </video>
        </div>
        <div class="landing__search">
            <p>HOla</p>
        </div>-->
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component Landing mounted");
    },
};
</script>

<style>
.landing {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: -1.5rem;
    display: flex;
    justify-content: center;
}

.landing__mask {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    gap: 3rem;
    z-index: 2;
    background-image: linear-gradient(
        to bottom,
        rgba(245, 246, 252, 0.747),
        rgba(0, 0, 0, 0.884)
    );
}

.landing__logo {
    display: flex;
    justify-content: center;
    width: 100%;
}

.landing__logo img {
    width: 30%;
}

.landing__search {
    display: flex;
    width: 50%;
    height: 3rem;
}

.landing__input {
    width: 90%;
    background: rgba(219, 219, 219, 0.473);
    border-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    outline: none;
    border: none;
    padding: 20px;
}
.landing__input::placeholder {
    color: rgb(0, 0, 0);
}

.landing__search-button {
    background: rgba(219, 219, 219, 0.692);
    border: none;
    width: 10%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

.landing__description {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 3;
    align-items: center;
}

.landing__text {
    color: white;
    font-size: var(--it-text);
    text-align: center;
    width: 40rem;
}

.landing__button {
    width: 15rem;
    height: 3rem;
    border: none;
    border-radius: 10px;
}

.landing__button--orange {
    background: var(--orange-200);
    color: white;
    font-weight: bold;
}

.landing__video {
    /* width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;*/
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
}

.landing__nav {
    display: flex;
    position: absolute;
    width: 100%;
    height: 3rem;
    z-index: 5;
    justify-content: flex-end;
    gap: 1rem;
    align-items: center;
    padding-right: 3rem;
}

.landing__nav p {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-right: 2rem;
    color: rgb(39, 39, 39);
}

.landing__link {
    text-decoration: none;
    color: rgb(39, 39, 39);
    font-size: var(--it-text);
}

.landing__link:hover {
    color: black;
}

/*-.landing__banner{
        position: absolute;
        width: 100%;
        height: 100%;
        background: blue;
        top: 0;
        object-fit: cover;
       
    }
    
    .landing__video{
        width: 100%;
        
    }

    .landing__search{
        position: absolute;
        width: 100%;
        background: rgba(2, 2, 2, 0.856);
        z-index: 9992;
        height: 5rem;
        top: 20rem;
        color: white;
    }

    .landing__logo{
        position: absolute;
        width: 100%;
        top: 10rem;
    }*/
</style>
