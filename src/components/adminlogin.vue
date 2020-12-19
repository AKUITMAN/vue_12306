<template>
<div class="box">
  <video class="vid" autoplay loop muted playsinline preload="auto">
    <source src="../assets/我的作品1.mp4" type="video/mp4">
  </video>
  <div class="title">12306后台管理员登录</div>
  <div class="box1">
    <input type="text" v-model="tbuser.userName"  placeholder="请输入登录名"></input>
    <input type="password" v-model="tbuser.password" placeholder="请输入密码"></input>
    <div class="btndiv01"><button class="btn01" type="submit" @click="adminlogin">登录</button></div>

  </div>

</div>
</template>

<script>
  import axios from 'axios';

  export default {
        data(){
          return{
            tbuser:{
              userName:'',
              password:'',
            }
          }
        },
        methods:{
          adminlogin:function () {
            axios.post("/api/tbuser/login",this.tbuser).then(res=>{
              if (res.data.code==200){
                alert(res.data.message);
                this.$cookie.set("guan",this.tbuser.userName);
                this.$router.push("/manage")
              }else{
                alert(res.data.message)
              }
            })
          }
        }
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
    /*background-color: pink;*/
    position: relative;
  }
  .box1{
    width: 307px;
    height: 300px;
    /*border: 1px solid red;*/
    position: absolute;
    left: 616px;
    top: 300px;
    overflow: hidden;
  }
  input{
    /*opacity: 0.4;*/
    display: inline-block;
    border: 1px solid #000000;
    width: 300px;
    margin-top: 20px;
    height: 30px;
    border-radius: 30px;
    background: repeat;
    color: #3bf2ff;
    /*color: aqua;*/
  }
  .btn01{
    margin-top: 20px;
    width: 104px;
    height: 35px;
    border-radius: 25px;
    opacity: 0.7;
    float: left;
    margin-left: 20px;
    font-size: 20px;
    background: rgba(78,239,75,1);
  }
  .btn02{
    margin-top: 20px;
    width: 104px;
    height: 35px;
    border-radius: 25px;
    opacity: 0.7;
    float: left;
    margin-left: 55px;
    font-size: 20px;
    background: rgba(192,169,223,1);
  }
  .btndiv01{

  }
  .btndiv02{

  }
</style>
