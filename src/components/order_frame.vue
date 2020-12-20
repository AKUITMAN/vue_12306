<template>
  <div>
    <div>
      <!-- 首页头部 -->
      <div class="box">
        <div class="box-a">
          <h1 class="box-a-1">
            <img src="../assets/12306img/logo.jpg" alt="">
          </h1>
          <div class="box-quan">
            <div class="box-ipt">
              <input type="text" placeholder="搜索车票/餐饮/常旅客/相关规章" id="ipt">
              <el-button type="primary" icon="el-icon-search">搜索</el-button>
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
      </div>

      <!--  顶部导航菜单  -->
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





      <!-- 左侧导航   -->
      <el-row>
        <el-col :span="18" :offset="3">
          <!--
                      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                        <el-menu :default-openeds="['3','1','4','5','6']">
                          <el-submenu index="1">
                            <template slot="title">
                              <i class="el-icon-message"></i>订单中心
                            </template>
                            <el-menu-item-group>
                              <el-menu-item index="1-1">火车票订单</el-menu-item>
                              <el-menu-item index="1-2">候补订单</el-menu-item>
                              <el-menu-item index="1-3">餐饮<i class="el-icon-minus"></i>特产</el-menu-item>
                              <el-menu-item index="1-4">保险订单</el-menu-item>
                            </el-menu-item-group>
                          </el-submenu>
                          <el-menu-item @click="btn">本人车票</el-menu-item>
                          <el-menu-item @click="btn">会员中心</el-menu-item>
                          <el-submenu index="3">
                            <template slot="title">
                              <i class="el-icon-setting"></i>个人信息
                            </template>
                            <el-menu-item-group>
                              <el-menu-item index="3-1">查看个人信息</el-menu-item>
                              <el-menu-item index="3-2">账号安全</el-menu-item>
                              <el-menu-item index="3-3">手机核验</el-menu-item>
                              <el-menu-item index="3-4">账号注销</el-menu-item>
                            </el-menu-item-group>
                          </el-submenu>
                          <el-submenu index="4">
                            <template slot="title">
                              <i class="el-icon-setting"></i>常用信息管理
                            </template>
                            <el-menu-item-group>
                              <el-menu-item index="4-1">乘车人</el-menu-item>
                              <el-menu-item index="4-2">地址管理</el-menu-item>
                            </el-menu-item-group>
                          </el-submenu>
                          <el-submenu index="5">
                            <template slot="title">
                              <i class="el-icon-setting"></i>温馨服务
                            </template>
                            <el-menu-item-group>
                              <el-menu-item index="5-1">重点旅客预约</el-menu-item>
                              <el-menu-item index="5-2">遗失物品查找</el-menu-item>
                              <el-menu-item index="5-3">服务查询</el-menu-item>
                            </el-menu-item-group>
                          </el-submenu>
                          <el-submenu index="6">
                            <template slot="title">
                              <i class="el-icon-setting"></i>投诉和建议
                            </template>
                            <el-menu-item-group>
                              <el-menu-item index="6-1">投诉</el-menu-item>
                              <el-menu-item index="6-2">建议</el-menu-item>
                            </el-menu-item-group>
                          </el-submenu>
                        </el-menu>
                      </el-aside>
          -->
          <el-container style="height: 100%;">

          <el-col :span="6">
            <el-menu
              default-active="activeIndex3"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              @select="handleSelect">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-message"></i>订单中心
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">火车票订单</el-menu-item>
                  <el-menu-item index="1-2">候补订单</el-menu-item>
                  <el-menu-item index="1-3">餐饮<i class="el-icon-minus"></i>特产</el-menu-item>
                  <el-menu-item index="1-4">保险订单</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="2-1">本人车票</el-menu-item>
              <el-menu-item index="2-2">会员中心</el-menu-item>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-setting"></i>个人信息
                </template>
                <el-menu-item-group>
                  <el-submenu index="personal">
                    <template slot="title">查看个人信息
                    </template>
                  </el-submenu>
                  <el-submenu index="account">
                    <template slot="title">账号安全
                    </template>
                  </el-submenu>
                  <el-menu-item index="3-3">手机核验</el-menu-item>
                  <el-menu-item index="3-4">账号注销</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-setting"></i>常用信息管理
                </template>
                <el-menu-item-group>
                  <el-submenu index="rider">
                    <template slot="title">乘车人
                    </template>
                  </el-submenu>
                  <el-menu-item index="4-2">地址管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-setting"></i>温馨服务
                </template>
                <el-menu-item-group>
                  <el-menu-item index="5-1">重点旅客预约</el-menu-item>
                  <el-menu-item index="5-2">遗失物品查找</el-menu-item>
                  <el-menu-item index="5-3">服务查询</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-setting"></i>投诉和建议
                </template>
                <el-menu-item-group>
                  <el-menu-item index="6-1">投诉</el-menu-item>
                  <el-menu-item index="6-2">建议</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
            <el-container>
              <router-view/>
            </el-container>
          </el-container>
        </el-col>
      </el-row>

      <!-- 首页尾部 -->
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
<!--        <div class="box-c"
             @click="liteng">
          <span class="iconfont icon-xiangshangjiantou"></span>
        </div>-->
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item),
      activeIndex: '1',
      activeIndex2:'1',
      activeIndex3:'1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$message({
        message:key,
        type:'success'
      });
    },
    handleOpen(key, keyPath) {
      console.log( keyPath);
      if (keyPath[1]=="rider"){
        this.$router.push("/rider")
      }
      if (keyPath[1]=="personal"){
        this.$router.push("/personal")
      }
      if (keyPath[1]=="account"){
        this.$router.push("/account")
      }
      if (keyPath[1]=="password"){
        this.$router.push("/password")
      }

    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<style>
@import url("../assets/font/iconfont.css");

.line {
  margin-top: -37px;
  margin-bottom: 8px;

}

.box {
  width: 100%;
  height: 120px;
  background: #fff;
  z-index: 200;
}

.box-a {
  width: 1200px;
  height: 0px;
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
  width: 900px;
  height: 40px;
  float: right;
}

.box-ipt {
  width: 523px;
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


.box-ul {
  width: 310px;
  height: 40px;
  background: #f8f8f8;
  float: left;
  margin: 15px 0 0 0;
  line-height: 20px;
  position: relative;
  margin-left: 27px;
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


/*尾部*/
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

</style>
