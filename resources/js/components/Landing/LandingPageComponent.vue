<template>
    
    <div class="landing" >
        <div class="landing__banner">
            <video autoplay muted loop id="myVideo" class="landing__video">
                    <source src="assets/video1.mp4" type="video/mp4">
            </video>
        </div>
        <div class="landing__search">

        </div>
    </div>

</template>

<script>
export default {
    mounted(){
        console.log("Component Landing mounted")
    },
}
</script>

<style>

    .landing{
        position: relative;
        background:red;
    }

    .landing__banner{
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
        background: rgba(0, 0, 0, 0.199);
        z-index: 1;
        height: 100%;
    }

</style>