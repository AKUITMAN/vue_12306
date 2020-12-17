<template>
  <div class="header_container">

    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
      <!--用于显示路由中的meta中的配置信息-->
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-dropdown @command="handleCommand" menu-align='start'>
      <img :src="url" class="avator">
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <el-upload
            class="upload-demo"
            action="#"
            :show-file-list="false"
            :http-request="uploadSectionFile">
            <el-button size="mini" type="primary">上传头像</el-button>
          </el-upload>
        </el-dropdown-item>
        <el-dropdown-item command="home"><el-button size="mini" type="success"  style="width: 50px">首页</el-button></el-dropdown-item>

        <el-dropdown-item command="signout"><el-button size="mini" type="danger">退出</el-button></el-dropdown-item>

      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import {setCookie,getCookie} from "../config/store_cookie";
  export default {
    data(){
      return {
        form:{
          aaa:""
        },
        //url:"http://localhost:8989/files/files2/2020-08-12/20200812122822e85042f34cc44b1989b0a0a8f57cdd3f.jpg"
        // url:"http://localhost:8089/files/2020-08-12/20200812165331a9a2073287e8450f894518814579bd92.jpg"
        url:""
      }
    },
    created(){
        this.initPicture();
    },
    computed: {

    },
    methods: {
      //初始化头像
      initPicture(){
        let userphone = getCookie("token");
        this.$http.get("http://localhost:8089/file/getPicture?userPhone="+userphone).then(res=>{
          this.url = res.data.img_url;
        })
      },

      uploadSectionFile (param) {
        let form = new FormData()
        let userphone = getCookie("token");
        form.append('file', param.file)
        form.append('userphone', userphone)
        console.log(form)
        this.$http.post('http://localhost:8089/file/upload', form, {
          headers: {'Content-Type': 'multipart/form-data'},}).then((res) => {
          if (res.data.flag) {
            this.$message({
              showClose: true,
              message: "头像上传成功",
              type: 'success',
            });
            location.reload();
          } else {
            this.$message({
              showClose: true,
              message: "头像上传失败",
              type: 'error',
            });
          }

        })
      },
      async handleCommand(command) {
        if (command == 'home') {
          this.$router.push('/manage');
        }else if(command == 'signout'){
            this.$router.push('/');
        }else if(command == 'upload'){
          let user_phone = getCookie("token");


        }
      },
    }
  }
</script>

<style lang="less">
  @import '../style/mixin';
  .header_container{
    background-color: #EFF2F7;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  }
  .avator{
    .wh(36px, 36px);
    border-radius: 50%;
    margin-right: 37px;
  }
  .el-dropdown-menu__item{
    text-align: center;
  }
</style>
