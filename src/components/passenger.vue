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


    <!--头部导航栏-->
    <div class="line" style="background-color:#3B99FC">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#3B99FC"
        text-color="#fff"
        active-text-color="#f6f93b"
        style="margin-left: 270px">
        <el-menu-item index="0">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">车票</template>
          <el-menu-item index="2-1-1">单程</el-menu-item>
          <el-menu-item index="2-2-2">往返</el-menu-item>
          <el-menu-item index="2-3-3">退票</el-menu-item>
          <el-menu-item index="2-4-4">改签</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">团购服务</template>
          <el-menu-item index="3-1-1">务工人员</el-menu-item>
          <el-menu-item index="3-2-2">学生团体</el-menu-item>
        </el-submenu>
        <!--          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
        <el-submenu index="4">
          <template slot="title">会员服务</template>
          <el-menu-item index="4-1-1">会员管理</el-menu-item>
          <el-menu-item index="4-2-2">会员中心</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">站车服务</template>
          <el-menu-item index="5-1-1">重点旅客预约</el-menu-item>
          <el-menu-item index="5-2-2">遗失物品查找</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">商旅服务</template>
          <el-menu-item index="6-1-1">旅游</el-menu-item>
          <el-menu-item index="6-2-2">餐饮</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">出行指南</template>
          <el-menu-item index="7-1-2">车票</el-menu-item>
          <el-menu-item index="7-2-2">改签</el-menu-item>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">信息查询</template>
          <el-menu-item index="8-1-2">正晚点</el-menu-item>
          <el-menu-item index="8-2-2">时刻表</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>

    <div class="center">
      <div class="layout">
        <div class="abc">
        <div class="lay-hd">
          列车信息<span class="small">（以下余票信息仅供参考）</span>
        </div>
          <div class="clift">
            <strong class="stll">{{$route.params.v3}}</strong>  &nbsp;&nbsp;&nbsp;
            <strong class="stll">{{$route.params.tr}}</strong>次
            <strong class="stll">{{$route.params.addfrom}}</strong>站
            <strong class="stll">({{$route.params.ftime}}开)-{{$route.params.ato}}</strong>站（{{$route.params.ttime}}）到
          </div>
          <div class="price">
            站票<strong class="price1">(￥{{tickett[0].price}})</strong>{{$route.params.nseat}}张票&nbsp&nbsp&nbsp
            硬座<strong class="price1">(￥{{tickett[1].price}})</strong>{{$route.params.hseat}}张票&nbsp&nbsp&nbsp
            卧铺<strong class="price1">(￥{{tickett[2].price}})</strong>{{$route.params.sleep}}张票
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
                <select id="piaoazhong">
                  <option value="1">成人票</option>
                  <option value="2">学生票</option>
                  <option value="3">儿童票</option>
                  <option value="4">残军票</option>
                </select>
                </el-table-column>

                <el-table-column
                  prop="type"
                  label="席别"
                  width="150">
                  <select id="xibie">
                    <option value="1">硬座(￥{{tickett[0].price}})</option>
                    <option value="2">无座(￥{{tickett[1].price}})</option>
                    <option value="3">卧铺(￥{{tickett[2].price}})</option>
                  </select>
                </el-table-column>
                <el-table-column
                  prop="riderName"
                  label="姓名"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="cardType"
                  label="证件类型"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="idCard"
                  label="证件号码"
                  width="200">
                </el-table-column> <el-table-column
                prop="cell"
                label="手机号码"
                width="150">
              </el-table-column>
              </el-table>
            </template>

          </div>
          <img  class="img" src="../assets/12306img/ins_ad6.png">
          <!--<img class="img" src="http://qlbh2fksn.hn-bkt.clouddn.com/ins_ad6.png">-->
        </div>
        <div class="bttt-sub">
          <el-button type="info" plain>上一步</el-button>
          <el-button type="warning">提交</el-button>
        </div>
      </div>
    </div>

    <!-- 首页尾部 -->
    <div class="qianfeng">
      <div class="box-d">
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
      <!--        <div class="box-c"
                   @click="liteng">
                <span class="iconfont icon-xiangshangjiantou"></span>
              </div>-->
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
    /*export default {
        name: "passenger",
    }*/
    export default {
      data() {
        return {
          value2:'',
          tableData: [],
          currentRow: null,
          tickett:[],
          userId:'1'
        }
      },

      methods: {
        // setCurrent(row) {
        //   this.$refs.singleTable.setCurrentRow(row);
        // },
        // handleCurrentChange(val) {
        //   this.currentRow = val;
        // }

        // ss(){
        //   alert(this.value3)
        //   alert(this.row.trainName);
        // }
        ddan(){

          axios.get("api/price/findPrice/"+this.$route.params.trId).then(res =>{
            if (res.data.code == 200) {

              this.tickett=res.data.data;

            }
          });

        },

        chengke(){
          axios.get("api/rider/findUid/"+this.userId).then(res=>{
            if (res.data.code == 200) {

              this.tableData=res.data.data;
            }
          })

        }

      },
        mounted(){
          // alert(this.$route.params.trId)
          this.ddan();
          this.chengke();
        }


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
    margin-left: 40px;
  }
  .price{
    margin-left: 40px;
    margin-top: 20px;
  }
  .price1{
    color: chocolate;
  }
  .shuoming{
    margin-top: 20px;
    margin-left: 45px;
    color: #1678be;
    font-size: 10px;
  }
  .bxk{
    margin-left: 750px;
    margin-top: 2px;
    margin-bottom: 20px;
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

  .line {
    margin-top: 15px;
    margin-bottom: 8px;

  }


  .qianfeng {
    width: 1200px;
    height: 280px;
    background-color: #f8f8f8;
    margin: 0 auto;
    margin-top: 400px;

  }

  .box-d {
    padding: 10px 0;
    width: 1200px;
    /* padding: 0 5px; */
    margin-left: auto;
    margin-right: auto;
    margin-top: -445px;
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
    line-height: 40px;
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

  .bttt-sub{
    width: 400px;
    margin-top: 340px;
    margin-left: 300px;
  }
  .bttt-sub button{
    width: 170px;
    height: 40px;

  }
</style>
