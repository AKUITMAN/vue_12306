<template>
  <div class="box">
    <head-top></head-top>
    <video class="vid" autoplay loop muted playsinline preload="auto">
<!--      <source src="../assets/我的作品1.mp4" type="video/mp4">-->
    </video>


</div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
  video{
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  .title{
    font-size: 40px;
    position: absolute;
    left: 570px;
    top: 110px;
    color: #fff;
  }
  .box{
    width: 100%;
    height: 100%;
    background-color: pink;
    position: relative;
    background-image: url("../assets/adminbeijing.jpg");
  }
</style>
