<template>
  <div style="margin-left: 100px;margin-top: 30px;border: #666666 1px solid;height: 360px;width: 500px">
    <div style="height: 40px;width: 500px;margin-left: -200px ;margin-top: 20px">
      <strong>基本信息</strong>
    </div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="姓名" prop="riderName">
      <el-input  style="width: 300px;float: left" v-model="ruleForm.riderName"></el-input>
    </el-form-item>
    <el-form-item label="身份证号" prop="idCard">
      <el-input style="width: 300px;float: left" v-model="ruleForm.idCard"></el-input>
    </el-form-item>
    <el-form-item style="width: 300px;float: left" label="性别" prop="gender">
      <el-select v-model="ruleForm.gender" placeholder="男">
        <el-option label="男" value="1"></el-option>
        <el-option label="女" value="0"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item style="width: 300px;float: left" label="乘客身份" prop="role">
      <el-select v-model="ruleForm.role" placeholder="成人">
        <el-option label="成人" value="1"></el-option>
        <el-option label="学生" value="0"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
    <div style="float:left ;margin-left: 140px">
      <el-button>取消</el-button>
    </div>
    <div style="float: left ;margin-left: 20px">
      <el-button type="success" @click="insertOrUpdate">提交</el-button>
    </div>
  </div>

</template>

<script>

   import axios from "axios";
   import cookie from 'vue-cookie';
   export default {
     name: "addRider",
     data() {
       return {
           ruleForm: {
           riderName: '',
           idCard: '',
           gender:'',
           role:'',
           userId:''
         },
         rules: {
           riderName: [
             { required: true, message: '请输入姓名', trigger: 'blur' },
             { min: 2, message: '请输入姓名', trigger: 'blur' }
           ],
           idCard: [
             { required: true, message: '请输入身份证号', trigger: 'blur' },
             { min: 18, max: 18, message: '请输入正确的身份证号', trigger: 'blur' }
           ],
         }
       };
     },

     methods:{
       insertOrUpdate:function () {
        this.ruleForm.userId=this.$cookie.get("token");
             axios.post("/api/rider/saveOrFlush",this.ruleForm).then(res=>{
               if (res.data.code==200){
                 // this.findByUid(1);
                 this.$router.push("/rider")
               }
             })
                  // alert(111)

       },

       findById:function (id) {
         axios.post("/api/rider/findById",{id:id}).then(res=>{
           if (res.data.code==200){
             this.ruleForm=res.data.data;
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
      /* alert(id)*/
       if (id!=null){
         this.findById(id)
       }

     }
   }
</script>

<style scoped>

</style>
