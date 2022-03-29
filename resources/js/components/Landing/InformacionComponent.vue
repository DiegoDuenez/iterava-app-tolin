<template>
    <div class="informacion">
        <div class="informacion__container">
            <div class="informacion__card">
                <div class="informacion__header">
                    <i class="fa-solid fa-telescope"></i>
                </div>
                <div class="informacion__body">
                    Conoce
                </div>
            </div>
            <div class="informacion__card">
                <div class="informacion__header">
                   <i class="fa-solid fa-compass"></i>
                </div>
                <div class="informacion__body">
                    Descubre
                </div>
            </div>
            <div class="informacion__card">
                <div class="informacion__header">
                    <i class="fa-solid fa-map-location-dot"></i>
                </div>
                <div class="informacion__body">
                    Trasciende
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    mounted(){
        console.log("Component Info mounted")
    },
}
</script>

<style scoped>
    .informacion{
        background-image: url('mundo.jpg');
        background-attachment: fixed;
        background-size: cover ;
        background-repeat: no-repeat;
        height: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10rem;
    }

    .informacion__container{
        display: flex;
        width: 80%;
        background: rgba(0, 0, 0, 0.479);
        height: max-content;
        gap: 2rem;
    }

    .informacion__card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 20rem;
        width: 33.33%;
        gap: 1rem;
    }

    .informacion__header{
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 5rem;
        color: white;

    }
    .informacion__header i{
        transition: .4s;
    }
    
    .informacion__card:hover .informacion__header i{
        font-size: 6rem;
    }

    .informacion__body{
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 2rem;
        color: white;
    }

</style>

