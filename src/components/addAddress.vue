<template>
<div>
  <el-form :inline="true" :model="address" class="demo-form-inline">
    <el-form-item label="省份">
      <el-select v-model="address.province" placeholder="省份">
        <el-option label="上海" value="上海"></el-option>
        <el-option label="北京" value="北京"></el-option>
        <el-option label="深圳" value="深圳"></el-option>
        <el-option label="广东" value="广东"></el-option>
        <el-option label="澳门" value="澳门"></el-option>
        <el-option label="香港" value="香港"></el-option>
        <el-option label="广西" value="广西"></el-option>
        <el-option label="内蒙古" value="内蒙古"></el-option>
        <el-option label="新疆" value="新疆"></el-option>
        <el-option label="西藏" value="西藏"></el-option>
        <el-option label="青海" value="青海"></el-option>
        <el-option label="陕西" value="陕西"></el-option>
        <el-option label="甘肃" value="甘肃"></el-option>
        <el-option label="宁夏" value="宁夏"></el-option>
        <el-option label="四川" value="四川"></el-option>
        <el-option label="云南" value="云南"></el-option>
        <el-option label="黑龙江" value="黑龙江"></el-option>
        <el-option label="吉林" value="吉林"></el-option>
        <el-option label="辽宁" value="辽宁"></el-option>
        <el-option label="天津" value="天津"></el-option>
        <el-option label="河北" value="河北"></el-option>
        <el-option label="海南" value="海南"></el-option>
        <el-option label="台湾" value="台湾"></el-option>
        <el-option label="山东" value="山东"></el-option>
        <el-option label="河南" value="河南"></el-option>
        <el-option label="江苏" value="江苏"></el-option>
        <el-option label="浙江" value="浙江"></el-option>
        <el-option label="湖北" value="湖北"></el-option>
        <el-option label="山西" value="山西"></el-option>
        <el-option label="贵州" value="贵州"></el-option>
        <el-option label="重庆" value="重庆"></el-option>
        <el-option label="安徽" value="安徽"></el-option>
        <el-option label="福建" value="福建"></el-option>
        <el-option label="南海诸岛" value="南海诸岛"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="城市">
      <el-input v-model="address.siteName" placeholder="城市"></el-input>
    </el-form-item>
    <el-form-item label="旅客吞吐量">
      <el-input v-model="address.heat" placeholder="(/万)"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">增加</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "addAddress",
      data() {
        return {
          address: {
            province: '',
            siteName: '',
            heat:''
          }
        }
      },
      methods: {
        onSubmit:function () {
          axios.post("/api/address/saveOrFlush",this.address).then(res=>{
            if (res.data.code==200){
              alert(res.data.message)
            }else{
              alert(res.data.message)
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
