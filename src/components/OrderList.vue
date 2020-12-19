<template>
<div>
  <div class="lay1">
    <el-table
      :data="orderList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column label="用户名" prop="userName">
      </el-table-column>
      <el-table-column label="出发城市" prop="siteFromName">
      </el-table-column>
      <el-table-column label="到达城市" prop="siteToName" >
      </el-table-column>
      <el-table-column label="乘客名" prop="riderName">
      </el-table-column>
      <el-table-column label="列车用时" prop="time">
      </el-table-column>
      <el-table-column label="出发日期" prop="putDay">
      </el-table-column>
      <el-table-column label="座位类型" prop="seatName">
      </el-table-column>
      <el-table-column label="座位价格" prop="price">
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button @click="handleDelete(scope.row.id)"  type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "OrderList",
      data() {
        return {
          orderList: [],
          search: ''
        }
      },
      methods: {
        findAll:function () {
          axios.get("/api/adminorder/findAll").then(res=>{
            if (res.data.code==200){
              this.orderList=res.data.data;
            }else if (res.data.code==300){
              alert("对不起，您权限不够")
            }
          })
        },
        handleDelete:function (id) {
          axios.post("/api/adminorder/deleteById",{id:id}).then(res=>{
            if (res.data.code==200){
              alert(res.data.message)
              this.findAll();
            }else if (res.data.code==300){
              alert("对不起，您权限不够");
            }
          })
        },
      },
      mounted() {
        this.findAll();
      }
    }
</script>

<style scoped>

</style>
