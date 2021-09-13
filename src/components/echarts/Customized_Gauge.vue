<template>
  <div ref="main" style="width: 100%;height:100%">

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {
    this.myEcharts();
  },
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.main);

      // 指定图表的配置项和数据
      let option = {
        series: [
          {
            name:'新增用户',
            type: "gauge",
            progress: {
              show: true,
              width: 7,
            },
            axisLine: {
              lineStyle: {
                width: 30,
                color:'#9548E8'
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
                // length: 15,
                // lineStyle: {
                //   width: 2,
                //   color: "#ffffff",
                // },
            },
            axisLabel: {
              show: false,
                // distance: 25,
                // color: "#999",
                // fontSize: 10,
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 3,
              itemStyle: {
                borderWidth: 1,
              },
            },
            detail: {
              valueAnimation: true,
              fontSize: 16,
              color: "white",
              offsetCenter: [0, "90%"],
            },
            // 图表大小
            radius: "100%",
            // 标题
            title: {
              offsetCenter:[-120,'-5%'],
              textStyle:{
                  color:'white',
                  fontSize:14,
                  fontWeight:'bolder'
              }
            },
            data: [
              {
                value: 60,
                name:'新增用户'
              },
            ],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>
<style lang='less' scoped>
</style>