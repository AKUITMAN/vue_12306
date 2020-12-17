<template>
  <div>

    <el-form :model="train" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="列车名" prop="trainName">
        <el-input  v-model="train.trainName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="发车时间" prop="fromTime">
        <el-input type="text" v-model="train.fromTime" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="到达时间" prop="toTime">
        <el-input v-model="train.toTime"></el-input>
      </el-form-item>
      <el-form-item label="硬站余票" prop="noSeat">
        <el-input v-model.number="train.noSeat"></el-input>
      </el-form-item>
      <el-form-item label="硬座余票" prop="hardSeat">
        <el-input v-model.number="train.hardSeat"></el-input>
      </el-form-item>
      <el-form-item label="卧铺余票" prop="sleeper">
        <el-input v-model.number="train.sleeper"></el-input>
      </el-form-item>
      <el-form-item label="行程用时" prop="last">
        <el-input  v-model="train.last" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="insertOrUpdate('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  import axios from "axios";
    export default {
        name: "",
      data(){
        return{
          train:{
            trainName:'',
            fromTime:'',
            toTime:'',
            noSeat:'',
            hardSeat:'',
            sleeper:'',
            last:'',
          },
        }
      },
      methods:{
        insertOrUpdate:function (formName) {
          console.log(formName)
          this.$refs[formName].validate((valid) => {
            console.log(valid);
            if (valid) {
              axios.post("/api/train/saveOrFlush",this.train).then(res=>{
                if (res.data.code==200){
                  this.$router.push("/trainList")
                }
              })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
          // alert(111)

        },

        findById:function (id) {
          axios.post("/api/train/findById",{id:id}).then(res=>{
            if (res.data.code==200){
              this.train=res.data.data;
            }
          })
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      },
      mounted(){
        var id = this.$route.params.id;
        //
        // alert(id)
        if (id!=null){
          this.findById(id)
        }

      }
    }
</script>

<style scoped>

</style>
