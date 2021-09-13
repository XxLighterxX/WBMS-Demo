<template>
  <div ref='main' style="width: 100%;height:100%">

  </div>
</template>

<script>
export default {
  data() {
    return {
      list: 2,
    };
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
        color: "#3DCDE8",
        title: [
          {
            text: this.list,
            textStyle: {
              fontSize: 14,
              color: "white",
            },
            right: 20,
            top: 10,
          },
          {
            text: this.list,
            textStyle: {
              fontSize: 14,
              color: "white",
            },
            left: 20,
            top: 10,
          },
          {
            text: this.list,
            textStyle: {
              fontSize: 14,
              color: "white",
            },
            borderColor: "#ccc", // 标题边框颜色
            // borderWidth: 1,           // 标题边框线宽，单位px，默认为0（无边框）
            left: 20,
            bottom: 5,
          },
        ],
        grid: {
          top: "18%",
          left: "0%",
          right: "5%",
          bottom: "15%",
          containLabel: true,
        },
        // legend:{
        //   x:'center',
        //   y:'center',
        //   orient: 'vertical',
        // },
        xAxis: {
          type: "category",
          //   show:false,
          data: [120, 800, 150, 80, 70, 110, 130],
          axisTick: {
            //y轴刻度线
            show: false,
          },
          splitLine: {
            //网格线
            show: false,
          },
          axisLine: {
            //y轴
            show: false,
          },
        },
        yAxis: {
          type: "value",
          show: false,
        },
        series: [
          {
            data: [120, 800, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(11, 31, 68, 0.2)",
            },
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
