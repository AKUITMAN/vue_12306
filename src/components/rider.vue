<template>
  <div style="border: #1678be 1px solid ;width: 815px">
  <div style="width: 815px;height: 40px;background-color: #3B99FC">

   <div style="margin-top: 7px;float: left ;margin-left: 20px">
   <a href="http://localhost:8080/#/addRider"> <i class="el-icon-circle-plus-outline" >添加</i></a>
  </div>

    <div style="margin-top: 7px;float: left;margin-left: 20px">
     <a href=""> <i class="el-icon-delete" >批量删除</i></a>
    </div>
  </div>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style=" width: 100%"
    @selection-change="findByUid">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>

    <el-table-column
      prop="riderName"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="idCard"
      label="身份证号"
      width="200">
    </el-table-column>
    <el-table-column
      prop="gender"
      label="性别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="role"
      label="乘客身份"
      width="120">
    </el-table-column>
    <el-table-column label="操作" width="200px">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="updateRider(scope.row.id)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "rider",
    data() {
      return {
        tableData: [],
        search: ''
      }
    },
    methods: {
      findByUid:function (userId) {
        axios.post("/api/rider/findByUid",{userId:userId}).then(res=>{
          if (res.data.code==200){
            this.tableData=res.data.data;
          }
        })
      },
      updateRider:function (id) {
       /* alert(id)*/
        this.$router.push({name:"addRider",params:{id:id}})
      },

      handleDelete:function (id) {
        axios.post("/api/rider/deleteById",{id:id}).then(res=>{
          if (res.data.code==200){
            this.findByUid(1);
          }
        })
      },
    },
    mounted() {
      this.findByUid(2)
    }
  }
</script>

<style scoped>

</style>
