<template>
<div>
  <el-table
    :data="peopleList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column label="乘客名" prop="riderName">
    </el-table-column>
    <el-table-column label="乘客身份证号" prop="idCard">
    </el-table-column>
    <el-table-column label="乘客性别" prop="gender" >
    </el-table-column>
    <el-table-column label="乘客身份" prop="role">
    </el-table-column>
    <el-table-column label="乘客所属用户" prop="userName">
    </el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button @click="DeletePeople(scope.row.id)"  type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
<!--  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="params.page"
    :page-sizes="params.pageSizes"
    :page-size="params.size"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total">
  </el-pagination>-->
</div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "AllPeopleList",
      data() {
        return {
          peopleList: [],
          search: '',
          /*params:{
            size:10,
            page:1,
            pageSizes:[5,10,]
          },
          total:100*/
        }
      },
      methods:{
       /* handleSizeChange(val) {
          this.params.size=val;
          this.findAll();
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          this.params.page=val,
            this.findAll();
          console.log(`当前页: ${val}`);
        },*/
        findAll:function () {
          axios.get("/api/rider/findAll").then(res=>{
            if (res.data.code==200){
              this.peopleList=res.data.data;
              //this.total=res.data.total;
            }else if (res.data.code==300){
              alert("对不起，您权限不够")
            }
          })
        },
        DeletePeople:function (id) {
          axios.post("api/rider/deleteById",{id:id}).then(res=>{
            if (res.data.code==200){
              alert("删除成功");
              this.findAll();
            }else if (res.data.code==300){
              alert("对不起，您权限不够")
            }
          })
        }

      },
      mounted() {
        this.findAll();
      }
    }
</script>

<style scoped>

</style>
