<template>
<div>
  <!-- 首页头部 -->
  <div class="box">
    <div class="box-a">
      <h1 class="box-a-1">
        <img src="../assets/12306img/logo.jpg"
             alt="">
      </h1>
      <div class="box-quan">
        <div class="box-ipt">
          <input type="text"
                 placeholder="搜索车票/餐饮/常旅客/相关规章"
                 id="ipt">
          <button id="but"><span class="iconfont icon-fangdajing"></span></button>
        </div>
        <ul class="box-ul">
          <li class="eng">
            <a>English</a><i class="caret"></i>|
            <ul class="wode">
              <li>
                <a href="">简体中文</a>
                <a href="">English</a>
              </li>
            </ul>
          </li>
          <li class="wo">
            <a>我的12306</a><i class="caret"></i>|
            <ul class="yi">
              <li>
                <a href="">火车票订单</a>
                <a href="">本人车票</a>
              </li>
              <li>
                <a href="">我的餐饮特产</a>
                <a href="">我的保险</a>
                <a href="">我的会员</a>
              </li>
              <li>
                <a href="">查看个人信息</a>
                <a href="">账户安全</a>
              </li>
              <li>
                <a href="">乘车人</a>
                <a href="">地址管理</a>
              </li>
              <li>
                <a href="">温馨服务查询</a>
              </li>
            </ul>
          </li>
          <div style="position:absolute; margin-top: -10px;margin-left: 250px">
            <li id="user"><el-button type="text"  @click="login" plain>登录</el-button>
              <el-button type="text" @click="sign" plain>注册</el-button> </li></div>
        </ul>
      </div>
    </div>
  </div>
  <el-container>
    <el-main>
      <div style="position: absolute;left: 260px;top: 100px;">
        <h5>您现在的位置：个人信息  > 忘记密码</h5>
      </div>
      <div style="margin: auto; height: 600px;width: 1000px;border: solid 1px darkolivegreen;background-color: #3bf2ff">
        <div class="kk">
          <div style="position: absolute;left: 10px">
            修改密码
          </div>
          <div style="position: absolute;margin-left: 400px;margin-top: 50px">
          <h1>修&nbsp;&nbsp;&nbsp改&nbsp;&nbsp;&nbsp密&nbsp;&nbsp;&nbsp码</h1>
          </div>
        </div>
        <div class="lay1" style="position:absolute;top:250px;left:550px;height: 400px;width: 400px;;border: solid 1px darkolivegreen;background-color: #3a8ee6">
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="用户名:">
              <el-input v-model="user.userName"></el-input>
            </el-form-item>
            <el-form-item label="身份证号:">
              <el-input v-model="user.idCard"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <el-input type="password" v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码:">
              <el-input v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item size="large">
              <el-button type="primary" @click="updatePassword">修改密码</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>

</div>
</template>

<script>
  import axios from 'axios';
    export default {
      data() {
        return {
          user: {
            userName: '',
            password: '',
            idCard:'',
            email:'',
          }
        };
      },
      methods: {
        login:function () {
          this.$router.push("/")
        },
        sign:function () {
          this.$router.push("/registry")
        },
        updatePassword:function () {
          axios.post("/api/user/updatePassword",this.user).then(res=>{
            if (res.data.code==200){
              this.$router.push("/")
            }else{
              alert(res.data.message)
            }
          })
        }
      }
    }
</script>

<style scoped>
  @import url("../assets/font/iconfont.css");
  .kk{
    width: 1000px;
    height: 30px;
    background-color: #237982;
    position: absolute;
  }

  .box {
    width: 100%;
    height: 120px;
    background: #fff;
    z-index: 200;
  }
  .box-a {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    background: #fff;
  }
  .box-a-1 {
    float: left;
    margin: 15px 0 0 0;
    padding: 0;
  }
  .box-a-1 img {
    display: block;
    width: 200px;
    height: 50px;
    cursor: pointer;
  }
  .box-quan {
    width: 850px;
    height: 40px;
    float: right;
  }
  .box-ipt {
    width: 460px;
    height: 40px;
    background: #fff;
    float: left;
    margin: 15px 0 0 0;
    line-height: 20px;
  }
  .box-ipt input {
    width: 420px;
    height: 25px;
    text-indent: 15px;
    line-height: 20px;
    outline: none;
    margin-top: 5px;
  }
  #but {
    width: 30px;
    height: 29px;
    line-height: 30px;
    line-height: 20px;
    color: #fff;
    background: #3b99fc;
    outline: none;
    border: 0px;
  }
  .box-ul {
    width: 335px;
    height: 40px;
    background: #f8f8f8;
    float: left;
    margin: 15px 0 0 0;
    line-height: 20px;
    position: relative;
    margin-left: 20px;
  }
  .box-ul li {
    float: left;
    line-height: 25px;
    color: #acd1f9;
    margin-left: 5px;
    cursor: pointer;
    font-size: 12px;
    margin-top: 10px;
  }
  .box-ul li .caret {
    margin-left: 5px;
    display: inline-block;
    width: 0;
    height: 0;
    line-height: 0;
    font-size: 0;
    overflow: hidden;
    border-width: 5px;
    cursor: pointer;
    border-style: solid dashed dashed dashed;
    border-color: #acd1f9 transparent transparent transparent;
    border-bottom: none;
    margin-right: 10px;
  }
  .box-ul .eng {
    margin-left: 80px;
  }
  .box-ul #user a {
    color: #000;
    margin-left: 5px;
  }

  /* 头部的鼠标划上事件 English 我的12306*/

  .wode {
    position: absolute;
    top: 34px;
    left: 90px;
    width: 80px;
    background: #fff;
    display: none;
    z-index: 201;
  }
  .wode li {
    line-height: 30px;
  }
  .wode li a {
    color: #000;
  }
  .box-ul .eng:hover ul {
    display: block;
  }
  .yi {
    position: absolute;
    top: 34px;
    left: 160px;
    width: 80px;
    background: #fff;
    display: none;
    z-index: 101;
  }
  .yi li {
    border-bottom: 1px dashed #000;
  }
  .yi li a {
    color: #000;
  }
  .box-ul .wo:hover ul {
    display: block;
    color: #000;
  }

  /* 二级菜单 */

  .box-list {
    width: 1200px;
    height: 40px;
    background: #3b99fc;
    margin: 0 auto;
    z-index: 200;
  }
  .box-list ul {
    width: 1200px;
    height: 40px;
  }
  .box-list ul li {
    float: left;
    width: 145px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    position: relative;
  }
  .box-list ul li span {
    margin-left: 5px;
    font-size: 12px;
    font-weight: bold;
  }

  /* 二级下拉菜单部分 */
  /* 车票头部 */
  .nav-box {
    width: 1200px;
    position: absolute;
    left: -145px;
    background: #fff;
    opacity: 0.9;
    text-align: left;
    display: none;
    border: 1px solid #3b99fc;
    z-index: 210;
  }
  .nav-box1 h3 {
    color: #3b99fc;
    height: 24px;
    position: relative;
    padding: 0 0 8px 30px;
    font-size: 14px;
    margin-left: 60px;
    /* border-right: 1px solid #acd1f9; */
  }
  .nav-box1 {
    width: 396px;
    float: left;
  }
  .nav-box1 li {
    float: left;
    text-align: left;
    width: 198px;
    line-height: 32px;
    height: 32px;
    padding-left: 30px;
    overflow: hidden;
    border-right: 1px solid #acd1f9;
  }
  .nav-box1 li a {
    color: #666;
    font-size: 14px;
  }

  /* 车票鼠标划上时间 */
  .chepiao:hover .nav-box {
    display: block;
  }
  /* 团购 */
  .tuan-box {
    width: 1200px;
    position: absolute;
    left: -290px;
    background: #fff;
    opacity: 0.9;
    text-align: left;
    display: none;
    border: 1px solid #3b99fc;
    z-index: 210;
  }
  .tuan-box1 {
    width: 396px;
    float: left;
  }
  .tuan-box1 li {
    float: left;
    text-align: left;
    width: 198px;
    line-height: 32px;
    height: 32px;
    padding-left: 30px;
    overflow: hidden;
    border-right: 1px solid #acd1f9;
  }
  .tuan-box1 li a {
    color: #666;
    font-size: 14px;
  }
  /* 车票鼠标划上时间 */
  .tuan:hover .tuan-box {
    display: block;
  }

  /* 站 */
  .zhan-box {
    width: 1200px;
    position: absolute;
    left: -580px;
    background: #fff;
    opacity: 0.9;
    text-align: left;
    display: none;
    border: 1px solid #3b99fc;
    z-index: 210;
  }
  .zhan-box1 {
    width: 396px;
    float: left;
  }
  .zhan-box1 li {
    float: left;
    text-align: left;
    width: 198px;
    line-height: 32px;
    height: 32px;
    padding-left: 30px;
    overflow: hidden;
    border-right: 1px solid #acd1f9;
  }
  .zhan-box1 li a {
    color: #666;
    font-size: 14px;
  }
  /* 车票鼠标划上时间 */
  .zhan:hover .zhan-box {
    display: block;
  }

  /* 商*/
  .shang-box {
    width: 1200px;
    position: absolute;
    left: -725px;
    background: #fff;
    opacity: 0.9;
    text-align: left;
    display: none;
    border: 1px solid #3b99fc;
    z-index: 210;
  }
  .shang-box1 {
    width: 396px;
    float: left;
  }
  .shang-box1 li {
    float: left;
    text-align: left;
    width: 198px;
    line-height: 32px;
    height: 32px;
    padding-left: 30px;
    overflow: hidden;
    border-right: 1px solid #acd1f9;
  }
  .shang-box1 li a {
    color: #666;
    font-size: 14px;
  }
  /* 车票鼠标划上时间 */
  .shang:hover .shang-box {
    display: block;
  }

  /* 出行指南 */

  /* 车票头部 */
  .zhinan-box {
    width: 1200px;
    position: absolute;
    left: -870px;
    background: #fff;
    opacity: 0.9;
    text-align: left;
    display: none;
    border: 1px solid #3b99fc;
    z-index: 210;
  }
  .zhinan-box1 h3 {
    color: #3b99fc;
    height: 24px;
    position: relative;
    padding: 0 0 8px 30px;
    font-size: 14px;
    margin-left: 60px;
    /* border-right: 1px solid #acd1f9; */
  }
  .zhinan-box1 {
    width: 396px;
    float: left;
  }
  .zhinan-box1 li {
    float: left;
    text-align: left;
    width: 198px;
    line-height: 32px;
    height: 32px;
    padding-left: 30px;
    overflow: hidden;
    border-right: 1px solid #acd1f9;
  }
  .zhinan li a {
    color: #666;
    font-size: 14px;
  }

  /* 车票鼠标划上时间 */
  .zhinan:hover .zhinan-box {
    display: block;
  }

  /* 信息 */
  .xinxi-box {
    width: 1200px;
    position: absolute;
    left: -1015px;
    background: #fff;
    opacity: 0.9;
    text-align: left;
    display: none;
    border: 1px solid #3b99fc;
    z-index: 210;
  }
  .xinxi-box1 h3 {
    /* width: 1200px; */
    color: #3b99fc;
    height: 24px;
    position: relative;
    padding: 0 0 8px 30px;
    font-size: 14px;
    margin-left: 60px;
    /* border-right: 1px solid #acd1f9; */
  }
  .xinxi-box1 {
    width: 396px;
    float: left;
  }
  .xinxi-box1 li {
    float: left;
    text-align: left;
    width: 198px;
    line-height: 32px;
    height: 32px;
    padding-left: 30px;
    overflow: hidden;
    border-right: 1px solid #acd1f9;
  }
  .xinxi li a {
    color: #666;
    font-size: 14px;
  }

  /* 车票鼠标划上时间 */
  .xinxi:hover .xinxi-box {
    display: block;
  }

  /* 会员 */

  /* 信息 */
  .hui-box {
    width: 1200px;
    position: absolute;
    left: -435px;
    background: #fff;
    opacity: 0.9;
    text-align: left;
    display: none;
    border: 1px solid #3b99fc;
    z-index: 210;
  }
  .hui-box1 h3 {
    /* width: 1200px; */
    color: #3b99fc;
    height: 24px;
    position: relative;
    padding: 0 0 8px 30px;
    font-size: 14px;
    margin-left: 60px;
    /* border-right: 1px solid #acd1f9; */
  }
  .hui-box1 {
    width: 396px;
    float: left;
  }
  .hui-box1 li {
    float: left;
    text-align: left;
    width: 198px;
    line-height: 32px;
    height: 32px;
    padding-left: 30px;
    overflow: hidden;
    border-right: 1px solid #acd1f9;
  }
  .hui li a {
    color: #666;
    font-size: 14px;
  }

  /* 车票鼠标划上时间 */
  .hui:hover .hui-box {
    display: block;
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
    line-height: 211px;
    font-size: 14px;
  }
  .qian-a ul {
    height: 100px;
  }
  .qian-a ul li {
    float: left;
    margin: 0 5px -40px 0;
    margin-top: 70px;
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
    line-height: 211px;
    font-size: 14px;
  }
  .xian .dimg {
    width: 80px;
    height: 80px;
    background: #fff;
    margin: 0 auto;
    position: relative;
    margin-top: 80px;
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
