<template>
  <div ref='main' style="width: 100%;height:100%">

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
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        title: {
          text: "年度销售额",
          textStyle: {
            fontSize: 16,
            color: "white",
          },
          left: 20,
          top: 10,
        },
        tooltip: {
          trigger: "axis",
          // axisPointer: {
          //   type: "cross",
          //   label: {
          //     backgroundColor: "#6a7985",
          //   },
          // },
        },
        // legend: {
        //   data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"],
        // },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {},
        //   },
        // },
        grid: {
          top: "18%",
          left: "0%",
          right: "5%",
          bottom: "15%",
          containLabel: true,
        },
        xAxis: [
          {
            show: false,
            type: "category",
            boundaryGap: false,
           data: [140, 232, 101, 264, 90, 340, 250,120,303,302,201,12],
          },
        ],
        yAxis: [
          {
            type: "value",
            show: false,
          },
        ],
        series: [
          {
            name: "Line 1",
            type: "line",
            stack: "总量",
            smooth: true,
            lineStyle: {
              width: 2,
              color:'#FF3EA9'
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(201, 52, 170)",
                },
                {
                  offset: 1,
                  color: "rgba(11, 31, 68)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [140, 232, 101, 264, 90, 340, 250,120,303,302,201,12],
          },
           {
            name: "Line 2",
            type: "line",
            stack: "总量",
            smooth: true,
            lineStyle: {
              width: 3,
              color:'#FF3EA9'
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(201, 52, 170)",
                },
                {
                  offset: 1,
                  color: "rgba(11, 31, 68)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [140, 232, 101, 264, 90, 340, 250,120,303,302,201,12],
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