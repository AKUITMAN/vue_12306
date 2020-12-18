<template>
  <div class="echarts">
    <h1>这是12306城市分布</h1>
    <div :style="{height:'600px',width:'100%'}" ref="myEchart"></div>
  </div>
</template>

<script>
  import axios from 'axios';
  import echarts from "echarts";
  import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
    export default {
      name: "addressList",
      rops: ["userJson"],
      data() {
        return {
          chart: null,
          addressList:[]
        };
      },
      mounted() {
        this.findAll();
        this.chinaConfigure();
      },
      beforeDestroy() {
        if (!this.chart) {
          return;
        }
        this.chart.dispose();
        this.chart = null;
      },
      methods: {
        findAll:function(){
          axios.get("/api/address/findMap").then(res=>{
            if (res.data.code==200){
              this.addressList=res.data.data;
              this.chinaConfigure();
              //alert(this.series.data),
              //alert(res.data.data)
              console.log(res.data);
            }else if (res.data.code==300){
              alert("对不起，您权限不够")
            }
          })
        },

        chinaConfigure() {
          console.log(this.userJson)
          let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
          window.onresize = myChart.resize;
          myChart.setOption({ // 进行相关配置
            backgroundColor: "#02AFDB",
            tooltip: {}, // 鼠标移到图里面的浮动提示框
            dataRange: {
              show: false,
              min: 0,
              max: 1000,
              text: ['High', 'Low'],
              realtime: true,
              calculable: true,
              color: ['orangered', 'yellow', 'lightskyblue']
            },
            geo: { // 这个是重点配置区
              map: 'china', // 表示中国地图
              roam: true,
              label: {
                normal: {
                  show: true, // 是否显示对应地名
                  textStyle: {
                    color: 'rgba(0,0,0,0.4)'
                  }
                }
              },
              itemStyle: {
                normal: {
                  borderColor: 'rgba(0, 0, 0, 0.2)'
                },
                emphasis: {
                  areaColor: null,
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowBlur: 20,
                  borderWidth: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            },
            series: [{
              type: 'scatter',
              coordinateSystem: 'geo' // 对应上方配置
            },
              {
                name: '旅客访问数量（/万）', // 浮动框的标题
                type: 'map',
                geoIndex: 0,
                data: this.addressList
              }
            ]
          })
        }
      },
    }
</script>

<style scoped>

</style>
