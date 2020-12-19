<template>
  <div class="manage_page fillcontain" >
    <div style=" background-color: #545c64">
    <meta  http-equiv="Cache-Control" content="no-cache,no-store,must-revlidate">
    <meta  http-equiv="Expires" content="O">
    <meta http-equiv="Pragma" content="no-cache">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b" style="margin-left: 300px">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </div>
    <div style="">
    <el-row style="height: 100%;">
      <!-- 左侧导航栏布局 -->
      <el-col :span="4" style="height:800px;background-color: #324057">

        <el-menu :default-active="defaultActive" style="min-height:100%" background-color="#243654" router text-color="#fff" active-text-color="#EBDD18">
          <el-menu-item index="manage"><i class="el-icon-s-home"></i>首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>用户管理</template>
            <el-menu-item index="TbUserList">用户信息</el-menu-item>
           <!-- <el-menu-item index="SearchTrainInfo">新增用户</el-menu-item>
            <el-menu-item index="TrainSchedule">修改用户信息</el-menu-item>-->
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-plus"></i>列车管理</template>
            <el-menu-item index="trainList">列车信息</el-menu-item>
            <el-menu-item index="addOrUpdateTrain">新增列车</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title"><i class="el-icon-star-on"></i>订单管理</template>
            <el-menu-item index="OrderList">全部订单</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-star-on"></i>乘客管理</template>
            <el-menu-item index="AllPeopleList">全部乘客</el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title"><i class="el-icon-user-solid"></i>城市管理</template>
            <el-menu-item index="addressList">全部城市</el-menu-item>
            <el-menu-item index="addAddress">新增城市</el-menu-item>
          </el-submenu>

        </el-menu>
      </el-col>

      <!-- 右侧布局 -->
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
    export default {
      computed: {
        defaultActive: function(){
          return this.$route.path.replace('/','')
        }
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      },
    }
</script>



<style scoped>


</style>
