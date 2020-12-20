<template>
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
          <!--<button id="but"><span class="iconfont icon-fangdajing"></span></button>-->
          <el-button type="primary" icon="el-icon-search" class="button1">搜索</el-button>
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
          <li id="user"><a>登录</a><a>注册</a></li>
        </ul>
      </div>
    </div>
    <div class="center">
      <div class="layout">
        <div class="abc">
        <div class="lay-hd">
          列车信息<span class="small">（以下余票信息仅供参考）</span>
        </div>
          <div class="clift">
            <strong class="stll">2020-12-19(周六)</strong>
            <strong class="stll">Z21</strong>次
            <strong class="stll">北京</strong>站
            <strong class="stll">(20:00开)-西宁</strong>站（14：00）到
          </div>
          <div class="price">
          硬座<strong class="price1">(1000.00)</strong>有票&nbsp&nbsp&nbsp
          站票<strong class="price1">(1000.00)</strong>有票&nbsp&nbsp&nbsp
          卧铺<strong class="price1">(1000.00)</strong>有票
          </div>
          <div class="shuoming">
            *显示的卧铺票价均为上铺票价，供您参考。具体票价以您确认支付时实际购买的铺别票价为准。
          </div>
        </div>
      </div>
      <div class="layout2">
        <div class="abc">
          <div class="lay-hd lay">
            乘客信息<span class="small">(填写说明)</span>
          </div>
          <div class="man">
            乘车人<br>
            <div class="bxk">
              <template>
                <el-checkbox v-model="checked">备选项</el-checkbox>
                <el-checkbox v-model="checked">备选项</el-checkbox>
                <el-checkbox v-model="checked">备选项</el-checkbox>
                <el-checkbox v-model="checked">备选项</el-checkbox>
                <el-checkbox v-model="checked">备选项</el-checkbox>
              </template>
            </div>
          </div>
          <div>
            <template>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  type="index"
                  width="50">
                </el-table-column>

                <el-table-column
                  prop="idType"
                  label="票种"
                  width="150">
                </el-table-column>

                <el-table-column
                  prop="type"
                  label="席别"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="userName"
                  label="姓名"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="cardType"
                  label="证件类型"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="idCard"
                  label="证件号码"
                  width="150">
                </el-table-column> <el-table-column
                prop="number"
                label="手机号码"
                width="150">
              </el-table-column>
              </el-table>
            </template>

          </div>
          <img  class="img" src="../assets/12306img/ins_ad6.png">
          <!--<img class="img" src="http://qlbh2fksn.hn-bkt.clouddn.com/ins_ad6.png">-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    /*export default {
        name: "passenger",
    }*/
    export default {
      data() {
        return {
          tableData: [{
            idType: '成人票',
            userName: '王小虎',
            type: '硬卧',
            cardType: '中国居民身份证',
            idCard: '610122**********32',
            number: '187*****852'
          },
            {
              idType: '成人票',
              userName: '王小虎',
              type: '硬卧',
              cardType: '中国居民身份证',
              idCard: '610122**********32',
              number: '187*****852'
            }],
          currentRow: null
        }
      },

      /*methods: {
        setCurrent(row) {
          this.$refs.singleTable.setCurrentRow(row);
        },
        handleCurrentChange(val) {
          this.currentRow = val;
        }
      }*/
    }
</script>

<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .body{
    height: 100%;
    width: 100%;

  }
  .button1{
    float: right;

  }
  .header{
    width: 1200px;
    height: 50px;
  }
  .logo{
    display: block;
    width: 200px;
    height: 50px;
    float: left;
    margin-left: 100px;
    margin-top: -8px;
  }
  .search-input{
    height: 24px;
    float: left;
    margin-left: 100px;
    width: 200px;
    margin-top: 3px;
  }
  .button{
    margin-top: 3px;
    float: left;
    margin-left: 0px;
    height: 30px;

  }
  .center{
    width: 980px;
    min-height: 620px;
    margin: 0 auto;
  }
  .layout{
    height: 150px;
    border: 1px solid #1678be;
    background-position: 0  -400px ;
  }
.lay-hd {
    margin-left: -700px;
    height: 32px;
    line-height: 30px;
    color: #e5f8ff;
    padding-left: 20px;
    font-size: 14px;
    position: relative;
  }
  .abc{
    height: 30px;
    width: 100%;
    background-color: #1678be;

  }
  .small{
    font-size: 10px;
  }
  .layout2{
    margin-top: 10px;
   height: 300px;
    border: 1px solid #1678be;
    border-radius: 5px 5px 0 0;
    background-position: 0  -400px ;
  }
  .lay{
    margin-left: -768px;
  }
  .img{
    width: 979px;
  }
  .man{
    margin-left: -750px;
  }
  .kuan{
    width: 50px;
    float: left;
  }
  .stll{
    font-size: 16px;
  }
  .clift{
    margin-left: -400px;
  }
  .price{
    margin-left: -400px;
    margin-top: 20px;
  }
  .price1{
    color: chocolate;
  }
  .shuoming{
    margin-top: 20px;
    margin-left: -450px;
    color: #1678be;
    font-size: 10px;
  }
  .bxk{
    margin-left: 400px;
    margin-top: 10px;
  }
  @import url("../assets/font/iconfont.css");
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
    margin-left: -55px;
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
    width: 310px;
    height: 40px;
    background: #f8f8f8;
    float: left;
    margin: 15px 0 0 0;
    line-height: 20px;
    position: relative;
    margin-left: 500px;
    margin-top: -40px;
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


</style>
