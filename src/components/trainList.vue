<template>
<div>
  <el-table
    :data="trainList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column label="列车名" prop="trainName">
    </el-table-column>
    <el-table-column label="发车时间" prop="fromTime">
    </el-table-column>
    <el-table-column label="到达时间" prop="toTime" >
    </el-table-column>
    <el-table-column label="硬站余票" prop="noSeat">
    </el-table-column>
    <el-table-column label="硬座余票" prop="hardSeat">
    </el-table-column>
    <el-table-column label="卧铺余票" prop="sleeper">
    </el-table-column>
    <el-table-column label="车辆用时" prop="last">
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
        <el-button @click="DeleteTrain(scope.row.id)"  type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="params.page"
    :page-sizes="params.pageSizes"
    :page-size="params.size"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total">
  </el-pagination>
</div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "trainList",
      data() {
        return {
          trainList: [],
          search: '',
          params:{
            size:10,
            page:1,
            pageSizes:[5,10,]
          },
          total:100
        }
      },
      methods:{
        updateTrain:function (id) {
          alert(id)
          this.$router.push({name:"addOrUpdateTrain",params:{id:id}})
        },
        handleSizeChange(val) {
          this.params.size=val;
            this.findAll();
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          this.params.page=val,
            this.findAll();
          console.log(`当前页: ${val}`);
        },
        findAll:function () {
          axios.get("/api/train/findAll/"+this.params.page+"/"+this.params.size).then(res=>{
            if (res.data.code==200){
              this.trainList=res.data.data;
              this.total=res.data.total;
            }else if (res.data.code==300){
              alert("对不起，您权限不够")
            }
          })
        },
        DeleteTrain:function (id) {
        axios.post("api/train/deleteById",{id:id}).then(res=>{
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
