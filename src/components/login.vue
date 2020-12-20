<template>
  <div class="login">
    <el-container>
      <el-header>
        <div class="lay1">
          <img src="http://qlb3x62w9.hn-bkt.clouddn.com/logo.jpg">
        </div>
        <div class="lay2"><h2>欢迎登录12306</h2></div>
      </el-header>
      <el-container>
        <el-main>
          <el-carousel indicator-position="outside" height="500px">
            <el-carousel-item v-for="item in 2" :key="item">
            </el-carousel-item>
          </el-carousel>
        </el-main>
        <div class="lay3" style="width: 400px;height: 400px; position: absolute;right:100px;top: 150px;z-index:999;opacity: 0.9">
          <div style="margin-left: 180px"><h2>登&nbsp&nbsp录</h2></div>
          <el-form  label-width="80px" :model="user">
          <el-form-item label="用户名">
            <el-input v-model="user.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="user.password"></el-input>
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input v-model="user.idCard"></el-input>
          </el-form-item>
          <el-row>
            <div style="margin-left: 180px">
            <el-button type="success" @click="login" plain>登录</el-button>
            </div>
          </el-row>
        </el-form>
          <hr>
          <div style="margin-left: 100px">
          <h4>还没有账号，<el-button type="text"  @click="registry" plain>立即注册</el-button>|
            <el-button type="text" @click="forgetPassword"> 忘记密码</el-button></h4></div>
          <hr>
          <h5>
            1、12306.cn网站每日06:00~23:30提供服务。<br>
            2、在12306.cn网站购票、改签和退票须不晚于开车前25分钟；办理“变更到站”业务时，请不晚于开车前48小时。
          </h5>
        </div>
      </el-container>
    </el-container>

    <div class="qianfeng">
      <div class="box-a">
        <div class="qian-a">
          <h2>友情链接</h2>
          <ul>
            <li><a href=""><img src="../assets/12306img/link02.png"></a></li>
            <li><a href=""><img src="../assets/12306img/link03.png"></a></li>
            <li><a href=""><img src="../assets/12306img/link04.png"></a></li>
            <li><a href=""><img src="../assets/12306img/link05.png"></a></li>
          </ul>
        </div>
        <ul class="xian">
          <li>
            <h2>中国铁路官方微信</h2>
            <div class="dimg">
              <img src="../assets/12306img/zgtlwx.png">
            </div>
          </li>
          <li>
            <h2>中国铁路官方微博</h2>
            <div class="dimg">
              <img src="../assets/12306img/zgtlwb.png">
            </div>
          </li>
          <li>
            <h2>12306 公众号</h2>
            <div class="dimg">
              <img src="../assets/12306img/public.png">
            </div>
          </li>
          <li>
            <h2>铁路12306</h2>
            <div class="dimg">
              <img src="../assets/12306img/download.png">
            </div>
          </li>
        </ul>
      </div>

      <!-- 底部 -->
      <div class="box-b">
        <p>
          <span class="mr">版权所有©2008-2020</span>
          <span>中国铁道科学研究院集团有限公司 </span>
        </p>
        <p>
          <span class="mr">京ICP备05020493号-4</span>
          <span class="mr">|</span>
          <span>ICP证：京B2-20202537</span>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios';
    export default {
      data() {
        return {
          labelPosition: 'right',
          user: {
            userName: '',
            password: '',
            idCard:'',
          }
        };
      },
      methods: {
        login:function () {
          axios.post("api/user/login",this.user).then(res=>{
            if (res.data.code==200){
              // alert(res.data.message);
              this.$message({
                type:'success',
                message:res.data.message
              });
              this.$cookie.set("token",res.data.data);
              //this.$router.push("/login")
            }else{
              this.$message({
                type:'danger',
                message:res.data.message
              });
            }
          })
        },
        registry:function () {
            this.$router.push("/registry")
        },
        forgetPassword:function () {
            this.$router.push("/forgetPassword")
        }
      }
    }
</script>

<style scoped>
  @import url("../assets/font/iconfont.css");
  .login{
    width: 100%;
    height: 1000px;
  }
  .lay2{
    float: left;
    line-height:45px;
    padding-left:40px;
    font-size: 15px;
    border-top: 10px;
  }
  .lay1{
    display: block;
    float: left;
    border-top: 10px;
  }
  .el-carousel__item:nth-child(2n) {
    background-image: url("http://qlb3x62w9.hn-bkt.clouddn.com/banner12.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-image: url("http://qlb3x62w9.hn-bkt.clouddn.com/banner-login-20200629.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  img.el-carousel__item{
    height: 600px;
    width: 100%;
  }
  .lay3{
    background-color: aliceblue;
  }


  .qianfeng {
    width: 1200px;
    height: 280px;
    background: #f8f8f8;
    margin: 0 auto;
  }
  .box-a {
    padding: 10px 0;
    width: 1200px;
    /* padding: 0 5px; */
    margin-left: auto;
    margin-right: auto;
    background: #fff;
  }
  .qian-a {
    margin-right: 20px;
    float: left;
    width: 420px;
    margin-left: 60px;
    /* margin-right: 195px; */
  }
  .qian-a h2 {
    height: 54px;
    line-height: 54px;
    font-size: 14px;
  }
  .qian-a ul {
    height: 100px;
  }
  .qian-a ul li {
    float: left;
    margin: 0 10px 10px 0;
  }
  .qian-a ul li a img {
    display: block;
    width: 198px;
    height: 34px;
    border: 1px solid #dedede;
  }

  .xian {
    float: left;
  }

  .xian li {
    float: left;
    width: 140px;
    text-align: center;
  }
  .xian li h2 {
    height: 54px;
    line-height: 54px;
    font-size: 14px;
  }
  .xian .dimg {
    width: 80px;
    height: 80px;
    background: #fff;
    margin: 0 auto;
    position: relative;
  }

  .xian .dimg img {
    display: block;
    width: 80px;
    height: 80px;
    border: 1px solid #dedede;
  }

  /* 底部 */

  .box-b {
    margin-top: 160px;
    width: 1200px;
    height: 80px;
    text-align: center;
    padding: 10px 0;
    background: #666;
    color: #c1c1c1;
  }
  .box-b p {
    line-height: 30px;
  }
  .box-b p span {
    font-size: 15px;
    color: #999;
    margin-left: 10px;
  }

  /* 返回顶端 */

  .box-c {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 60px;
    height: 60px;
    background: #f8f8f8;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
  }
  .box-c span {
    font-size: 35px;
  }

</style>
