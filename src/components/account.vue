<template>
    <div class="box">
      <div class="zlan">
        <div class="d1">
          <div class="l1">
          <i class="el-icon-lock"></i>密码登录
          </div>
        </div>
          <div class="d2">
          <div class="l1">
            建议您定期更改密码以保护账户安全
          </div>
          </div>
          <div class="d3">
          <div class="l3">
            <a href="http://localhost:8080/#/password"><el-button>修改</el-button></a>
          </div>
          </div>

      </div>
      <div class="toplan"></div>
      <div class="zlan">
        <div class="d1">
          <div class="l1">
            <i class="el-icon-mobile-phone"></i>手机核验
          </div>
        </div>
        <div class="d2">
          <div class="l1">
            使用手机接收铁路客户服务信息
          </div>
        </div>
        <div class="d3">
          <div class="l3">
            <el-button>修改</el-button>
          </div>
        </div>
      </div>
      <div class="toplan"></div>
      <div class="zlan">
        <div class="d1">
          <div class="l1">
            <i class="el-icon-message"></i>安全邮箱
          </div>
        </div>
        <div class="d2">
          <div class="l1">
            使用邮箱接收铁路客户服务信息
          </div>
        </div>
        <div class="d3">
          <div class="l3">
            <el-button>修改</el-button>
          </div>
        </div>
      </div>
      <div class="toplan"></div>
      <div class="zlan">
        <div class="d1">
          <div class="l1">
            <i class="el-icon-s-promotion"></i>通知设置
          </div>
        </div>
        <div class="d2">
          <div class="l1">
            设置通知方式
          </div>
        </div>
        <div class="d3">
          <div class="l3">
            <el-button>修改</el-button>
          </div>
        </div>
      </div>


    </div>
</template>

<script>
    export default {
        name: "account"
    }
</script>

<style scoped>
.box{
  border: #666666 1px solid;
  height: 320px;
  width: 700px;
  margin-left: 20px;
}
  .toplan{
    border-top: #666666 1px solid;
    margin-top: 20px;
  }
  .zlan{
    /*border: blue 1px solid;*/
    height: 40px;
    margin-top: 20px;

  }
  .d1{
    float: left;
    width: 200px;
  }
  .d2{
    float: left;
    width: 400px;
  }
  .d3{
    float: left;
    width: 100px;
  }
  .l1{
float: left;
    margin-top: 7px;
  }


</style>
