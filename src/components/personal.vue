<template>
<div class="max">
  <!--<div>
    <strong class="txt">基本信息</strong><br>
    用户名：<br>
    姓名：<br>

  </div>-->
  <strong class="txt">基本信息</strong><br>
  <div class="form-list form-list-view" >
    <div class="form-item">
      <div class="form-label"><span class="required">*</span>用户名：</div>
      <div class="form-bd"><div class="form-bd-txt">username</div></div>
    </div>
    <div class="form-item">
      <div class="form-label"><span class="required">*</span>姓名：</div>
      <div class="form-bd"><div class="form-bd-txt">username</div></div>
    </div>

    <div class="form-item">
      <div class="form-label">国家/地区：</div>
      <div class="form-bd"><div class="form-bd-txt">中国</div></div>
    </div>
    <div class="form-item">
      <div class="form-label"><span class="required">*</span>证件类型：</div>
      <div class="form-bd"><div class="form-bd-txt" data-val="1">中国居民身份证</div></div>
    </div>
    <div class="form-item">
      <div class="form-label"><span class="required">*</span>证件号码：</div>
      <div class="form-bd"><div class="form-bd-txt">idCard</div></div>
    </div>
    <div class="form-item">
      <div class="form-label">核验状态：</div>

      <div class="form-bd"><div class="form-bd-txt">

              <span class="txt-second" title="">

            已通过</span></div></div>
    </div>
  </div>
  <div class="xian"></div>
  <strong class="txt">联系方式</strong><br>
  <el-button round class="button">编辑</el-button>
  <div class="form-list form-list-view" >
    <div class="form-item">
      <div class="form-label"><span class="required">*</span>手机号：</div>
      <div class="form-bd"><div class="form-bd-txt">18726978956</div></div>
    </div>
    <div class="form-item">
      <div class="form-label">固定电话：</div>
      <div class="form-bd"><div class="form-bd-txt">029-82740565</div></div>
    </div>

    <div class="form-item">
      <div class="form-label">邮箱：</div>
      <div class="form-bd"><div class="form-bd-txt">email</div></div>
    </div>
    <div class="form-item">
      <div class="form-label">地址：</div>
      <div class="form-bd"><div class="form-bd-txt" data-val="1">陕西西安</div></div>
    </div>
    <div class="form-item">
      <div class="form-label">邮编：</div>
      <div class="form-bd"><div class="form-bd-txt">72500</div></div>
    </div>
  </div>
  <div class="xian"></div>
  <strong class="txt">联系方式</strong><br>
  <el-button round class="button">编辑</el-button>
  <div class="form-list form-list-view" >
    <div class="form-item from">
      <div class="form-label "><span class="required">*</span>旅客类型：</div>
      <div class="form-bd "><div class="form-bd-txt ">学生</div></div>
    </div>

  <div class="xian"></div>
    <strong class="txt">学生资质查询</strong><br>
    <el-button round class="button">查询</el-button>
    <div class="from">学生资质查询服务，提供查询本人的学生购票资质、购票优惠区间及年度剩余优惠票购票次数。</div>
    <!--<div class="form-list form-list-view" >
      <div class="form-item from">
        <div class="form-bd "><div class="form-bd-txt ">学生资质查询服务，提供查询本人的学生购票资质、购票优惠区间及年度剩余优惠票购票次数。</div></div>
      </div>
    </div>-->
</div>
</div>
</template>

<script>
    export default {
        name: "personal",
      data(){
          return{
            token:''
          }
      },

      mounted() {
          this.token=this.$cookie.get("token");

      }
    }


</script>

<style scoped>
  .max{
border: black 1px solid;
    height:630px;
    width: 700px;
  }
.txt{
  margin-top: 10px;
  margin-left: -550px;
}
  .center-form-item .form-label {
    width: 360px;
  }.form-list .form-label {
     float: left;
     padding: 5px 5px 5px 0;
     width: 100px;
     line-height: 20px;
     font-weight: 400;
     color: #666;
     text-align: right;
    margin-left: 180px;
   }
  .form-list .form-label .required {
      margin-right: 5px;
    }
  .required {
       color: #f00;
       font-weight: 400;
     }
  .center-form-item .form-bd {
        margin-left: 360px;
      }
  .form-list .form-bd {
    margin-left: 100px;
    min-height: 30px;
  }
  .form-list .form-bd-txt {
     line-height: 20px;
    margin-right: 270px;
     padding-top: 5px;
     padding-bottom: 5px;
     min-height: 20px;
   }
  .xian{
    border: black 1px solid;

  }
  .button{
    float: right;
    margin-right: 10px;
  }
  .xian2{
    border: black 1px solid;
    margin-top: 100px;
  }
  .from{
    margin-top: 70px;
  }
</style>
