<template>
    
    <div class="landing" >
        <h1>Landing</h1>
        <div class="landing__banner">
            <video autoplay muted loop id="myVideo">
                    <source src="assets/video1.mp4" type="video/mp4">
            </video>
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

