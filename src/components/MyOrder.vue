<template>
  <div style="width: 100%;height: 100%">
    <el-container>
      <!-- 面包屑     -->
      <el-row class="mbx">
        <el-col :span="18">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单中心</el-breadcrumb-item>
            <el-breadcrumb-item class="active">火车票订单</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>

      <!--头部分-->
      <el-header>




      </el-header>

      <!--中心部分-->
      <el-main>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="date" label="订票日期">
          </el-table-column>
          <el-table-column prop="id" label="" v-if="false" key
            3="1">
          </el-table-column>
          <el-table-column prop="car" label="车次信息">
          </el-table-column>
          <el-table-column prop="passenger" label="放客信息">
          </el-table-column>
          <el-table-column prop="seat" label="座位信息">
          </el-table-column>
          <el-table-column prop="price" label="票价">
          </el-table-column>
          <el-table-column prop="state" label="状态">
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">取消</el-button>
              <el-button type="text" size="small" @click="findAll()">去支付</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

      <!--尾部分-->
      <el-footer>Footer</el-footer>


    </el-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tableData: [
        {
          date: '2020-12-12',
          car: '北京-上海',
          passenger: '高升',
          seat: '软卧',
          price: '500',
          state: '未完成',
          id: '1'
        }
      ]
    }
  },
  methods: {
    handleClick(row) {
      this.$message({
        message: row,
        type: 'success'
      })
    },
    findAll() {
      axios.get("api/address/findAll").then(res => {
        alert(res.data.data[1].siteName)
        if (res.data.code == 200) {
        }
      })
    }
  }
}
</script>

<style>
.mbx{

}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  height: 700px;
}
</style>
