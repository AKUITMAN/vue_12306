<template>
<div>

  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <div style="position: absolute;left: 260px;top: 90px;">
        <h5>您现在的位置：个人信息  > 忘记密码</h5>
      </div>
      <div style="margin: auto; height: 600px;width: 1000px;border: solid 1px darkolivegreen;">
        <div class="kk">
          <div style="position: absolute;left: 10px">
            修改密码
          </div>
        </div>
        <div class="lay1" style="position:absolute;top:200px;left:550px;height: 500px;width: 400px;;border: solid 1px darkolivegreen;">
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="用户名:">
              <el-input v-model="user.userName"></el-input>
            </el-form-item>
            <el-form-item label="身份证号:">
              <el-input v-model="user.idCard"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <el-input type="password" v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码:">
              <el-input v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item size="large">
              <el-button type="primary" @click="updatePassword">修改密码</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>

</div>
</template>

<script>
  import axios from 'axios';
    export default {
      data() {
        return {
          user: {
            userName: '',
            password: '',
            idCard:'',
            email:'',
          }
        };
      },
      methods: {
        updatePassword:function () {
          axios.post("/api/user/updatePassword",this.user).then(res=>{
            if (res.data.code==200){
              this.$router.push("/")
            }else{
              alert(res.data.message)
            }
          })
        }
      }
    }
</script>

<style scoped>
  .kk{
    width: 1000px;
    height: 30px;
    background-color: #237982;
    position: absolute;
  }

</style>
