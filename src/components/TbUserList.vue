<template>
<div>
  <el-table
    :data="userList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column label="用户名" prop="userName">
    </el-table-column>
    <el-table-column label="用户密码" prop="password">
    </el-table-column>
    <el-table-column label="用户性别" prop="gender" >
    </el-table-column>
    <el-table-column label="用户邮箱" prop="email">
    </el-table-column>
    <el-table-column label="用户身份证号" prop="idCard">
    </el-table-column>
    <el-table-column label="用户级别" prop="level">
    </el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button @click="updateTrain(scope.row.id)" type="text" size="small">编辑</el-button>
        <el-button @click="handleDelete(scope.row.id)"  type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "TbUserList",
      data() {
        return {
          userList: [],
          search: ''
        }
      },
      methods: {
        findAll:function () {
          axios.get("/api/user/findAll").then(res=>{
            if (res.data.code==200){
              this.userList=res.data.data;
            }else if (res.data.code==300){
              alert("对不起，您权限不够")
            }
          })
        },
        handleDelete:function (id) {
          axios.post("/api/user/deleteByuserName",{id:id}).then(res=>{
            if (res.data.code==200){
              this.findAll();
            }
          })
        },
        updateTrain:function (id) {
          alert(id)
          this.$router.push({name:'addOrUpdateTrain',params:{id:id}})
        },

      },
      mounted() {
        this.findAll();
      }
    }
</script>

<style scoped>

</style>
