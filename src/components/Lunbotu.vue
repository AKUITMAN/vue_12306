<template>
  <!-- 首页头部 -->
  <div id="app">
    <div class="lunbo">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4"
                          :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>a

    <div class="dingwei">

      <el-tabs :tab-position="tabPosition"
               style="height: 350px;">
        <el-tab-pane label="车票">
          <el-tabs v-model="activeName"
                   @tab-click="handleClick">
            <el-tab-pane label="单程"
                         name="first">
              <!-- 内容部分单程 -->
              <div class="dancheng">
                <div class="chepiao">
                  <div class="chepiao-a">
                    <p class="chufa">出发地</p>
                    <div class="pinyin">
                      <input class="text-a"
                             type="text"
                             value="拼音/全拼/汉字">
                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">到达地</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text"
                             value="拼音/全拼/汉字">
                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">出发日期</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text">
                    </div>
                  </div>
                  <div class="chepiao-c">
                    <div class="zxcv">
                      <p class="chufa-c">学生</p>
                      <div class="pinyin-c">
                        <input class="text-c"
                               type="checkbox">
                      </div>
                      <div class="zxcvb">
                        <p class="chufa-d">高铁/动车</p>
                        <input class="text-d"
                               type="checkbox">
                      </div>

                    </div>
                  </div>
                  <div class="chepiao-d">
                    <p class="chufa-b">查询</p>
                  </div>

                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="往返"
                         name="second">
              <div class="dancheng">
                <div class="chepiao">
                  <div class="chepiao-a">
                    <p class="chufa">出发地</p>
                    <div class="pinyin">
                      <input class="text-a"
                             type="text"
                             value="拼音/全拼/汉字">
                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">到达地</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text"
                             value="拼音/全拼/汉字">
                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">出发日期</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text">
                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">返回日期</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text">
                    </div>
                  </div>
                  <div class="chepiao-c">
                    <div class="zxcv">
                      <p class="chufa-c">学生</p>
                      <div class="pinyin-c">
                        <input class="text-c"
                               type="checkbox">
                      </div>
                      <div class="zxcvb">
                        <p class="chufa-d">高铁/动车</p>
                        <input class="text-d"
                               type="checkbox">
                      </div>

                    </div>
                  </div>
                  <div class="chepiao-d">
                    <p class="chufa-b">查询</p>
                  </div>

                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="连续换乘"
                         name="third">
              <div class="dancheng">
                <div class="chepiao">
                  <div class="chepiao-a">
                    <p class="chufa">出发地</p>
                    <div class="pinyin">
                      <input class="text-a"
                             type="text"
                             value="拼音/全拼/汉字">
                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">到达地</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text"
                             value="拼音/全拼/汉字">
                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">乘车日期</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text">
                    </div>
                  </div>
                  <div class="chepiao-c">
                    <div class="zxcv">
                      <p class="chufa-c">学生</p>
                      <div class="pinyin-c">
                        <input class="text-c"
                               type="checkbox">
                      </div>
                    </div>
                  </div>
                  <div class="chepiao-d">
                    <p class="chufa-b">查询</p>
                  </div>

                </div>
              </div>
            </el-tab-pane>

            <!-- 退改签 -->
            <el-tab-pane label="退改签"
                         name="fourth">
              <div class="dancheng">
                <div class="chepiao">
                  <div class="chepiao-c">
                    <div class="zxcv">
                      <p class="chufa-c">订票日期</p>
                      <div class="pinyin-c">
                        <input class="text-c"
                               type="radio"
                               name="zz">
                      </div>
                      <div class="zxcvb">
                        <p class="chufa-d">乘车日期</p>
                        <input class="text-d"
                               type="radio"
                               name="zz">
                      </div>

                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">出发日期</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text">
                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">返回日期</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text">
                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">关键字</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text">
                    </div>
                  </div>

                  <div class="chepiao-d">
                    <p class="chufa-b">查询</p>
                  </div>

                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>

        <el-tab-pane label="常用查询">
          <el-tabs v-model="activeName"
                   @tab-click="handleClick">
            <el-tab-pane label="正晚点"
                         name="first">
              <div class="dancheng">
                <div class="chepiao">
                  <div class="chepiao-c">
                    <div class="zxcv">
                      <p class="chufa-c">到达站</p>
                      <div class="pinyin-c">
                        <input class="text-c"
                               type="radio"
                               name="zz">
                      </div>
                      <div class="zxcvb">
                        <p class="chufa-d">出发站</p>
                        <input class="text-d"
                               type="radio"
                               name="zz">
                      </div>

                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">车站</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text"
                             value="">
                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">车次</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text"
                             value="输入车次">
                    </div>
                  </div>
                  <div class="chepiao-d">
                    <p class="chufa-b">查询</p>
                  </div>

                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="检票口"
                         name="second">
              <div class="dancheng">
                <div class="chepiao">
                  <div class="chepiao-b">
                    <p class="chufa-b">乘车日期</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text"
                             value="">
                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">车次</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text"
                             value="输入车次">
                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">乘车站</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text"
                             value="请选择车站">
                    </div>
                  </div>
                  <div class="chepiao-d">
                    <p class="chufa-b">查询</p>
                  </div>

                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="起售时间"
                         name="third">
              <div class="dancheng">
                <div class="chepiao">
                  <div class="chepiao-b">
                    <p class="chufa-b">起售日期</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text"
                             value="">
                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">起售车站</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text"
                             value="输入车次">
                    </div>
                  </div>
                  <div class="chepiao-d">
                    <p class="chufa-b">查询</p>
                  </div>

                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="天气查询"
                         name="fourth">
              <div class="dancheng">
                <div class="chepiao">
                  <div class="chepiao-b">
                    <p class="chufa-b">目的地</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text"
                             value="简拼/全拼/汉字">
                    </div>
                  </div>
                  <div class="chepiao-d">
                    <p class="chufa-b">查询</p>
                  </div>

                </div>
              </div>
            </el-tab-pane>

          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="订餐">
          <el-tabs v-model="activeName"
                   @tab-click="handleClick">
            <el-tab-pane label="预定"
                         name="first">
              <div class="dancheng">
                <div class="chepiao">
                  <div class="chepiao-b">
                    <p class="chufa-b">出发日期</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text"
                             value="">
                    </div>
                  </div>
                  <div class="chepiao-b">
                    <p class="chufa-b">出发车次</p>
                    <div class="pinyin-b">
                      <input class="text-b"
                             type="text"
                             value="输入车次">
                    </div>
                  </div>
                  <div class="chepiao-d">
                    <p class="chufa-b">查询</p>
                  </div>

                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="餐饮订单"
                         name="second">gaio</el-tab-pane>
          </el-tabs>
        </el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabPosition: 'left'
    };
  }
};
</script>
<style scoped>
.lunbo {
  width: 1920px;
  height: 450px;
  margin: 0 auto;
  background: center 0;
  position: relative;
  left: 50%;
  margin-left: -960px;
  position: relative;
}
.el-carousel {
  height: 450px;
  width: 1920px;
  position: relative;
  left: 50%;
  margin-left: -960px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  height: 450px;
  width: 1920px;
  background: center 0;
  position: relative;
  left: 50%;
  margin-left: -960px;
}

.el-carousel__item:nth-child(n) {
  background: url("../assets/12306img/banner12.jpg");
  height: 450px;
  width: 100%;
  background-size: 100% 100%;
}

.el-carousel__item:nth-child(2n) {
  background: url("../assets/12306img/banner20200707.jpg") no-repeat center;
  height: 450px;
  width: 100%;
  background-size: 100% 100%;
}
.el-carousel__item:nth-child(3) {
  background: url("../assets/12306img/banner110.jpg") no-repeat center;
  height: 450px;
  width: 100%;
  background-size: 100% 100%;
}
.el-carousel__item:nth-child(4) {
  background: url("../assets/12306img/banner0619.jpg") no-repeat center;
  height: 450px;
  width: 100%;
  background-size: 100% 100%;
}

/* 定位 */

.dingwei {
  width: 510px;
  height: 350px;
  position: absolute;
  top: 157px;
  left: 10%;
  z-index: 100;
  background: #fff;
}
.el-tab-pane {
  display: block;
  width: 405px;
  height: 450px;
  background: #fff;
}
.el-tab-pane label {
  width: 100px;
  height: 100px;
  background: #fff;
}

/* 内容单程  */
.dancheng {
  width: 405px;
  height: 450px;
  background: #fff;
}
.chepiao {
  width: 300px;
  /* height: 350px; */
  background: #fff;
  margin-top: 20px;
  margin-left: 20px;
}
.chepiao-a {
  width: 320px;
  height: 40px;
  background: #fff;
}
.chepiao .chufa {
  float: left;
}
.text-a {
  float: left;
  width: 235px;
  height: 20px;
  margin-left: 5px;
}

.chepiao-b {
  width: 320px;
  height: 40px;
  background: #fff;
}
.chepiao-b .chufa-b {
  float: left;
}
.text-b {
  float: left;
  width: 235px;
  height: 20px;
  margin-left: 5px;
}
.chepiao-c {
  width: 320px;
  height: 40px;
  background: #fff;
}
.chepiao-cc .chufa-c {
  float: left;
}
.chufa-c {
  float: left;
}
.chufa-d {
  float: left;
}
.text-c {
  float: left;
  display: block;
  /* width: 235px; */
  height: 20px;
  margin-left: 5px;
  outline: none;
}
.zxcv {
  float: left;
  width: 200px;
  background: #fff;
  margin-left: 60px;
}
.zxcvb {
  float: left;
  background: #fff;
  margin-left: 20px;
}

.chepiao-d {
  width: 320px;
  background: #ff8201;
  border-radius: 10px;
  cursor: pointer;
}
.chepiao-d p {
  text-align: center;
}
.text-b {
  outline: none;
}
.text-a {
  outline: none;
}
</style>
