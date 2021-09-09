<template>
  <div class='works_index_main'>
    <div class="header">
      <div class="weatherBox FlexCenter">
        <div class="top FlexCenter">
          <p>早上好，程先生</p>
        </div>
        <div class="bottom FlexCenter">
          <div class="left">
            <p>眉山</p>
            <p>22°</p>
          </div>
          <div class="right">
            <p>123</p>
          </div>
        </div>
      </div>
      <div class="monthSalesBox">
        <LineOne></LineOne>
      </div>
      <div class="monthSalesBox">
         <Bar></Bar>
      </div>
      <div class="salesBox">
        <Bar></Bar>
      </div>
    </div>
    <div class="center">
      <p>123</p>
    </div>
    <div class="footer">
      <div class="top ">
        <p>本月用户统计</p>
      </div>
      <div class="content FlexCenter">
        <Customzed></Customzed>
        <Customzed></Customzed>
        <Customzed></Customzed>
      </div>
    </div>
  </div>
</template>

<script>
import Customzed from "../../echarts/Customized_Gauge.vue";
import Bar from "../../echarts/Bar.vue";
import LineOne from '../../echarts/Line.vue'
export default {
  data() {
    return {};
  },
  components: {
    Customzed,
    Bar,
    LineOne
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang='less' scoped>
.works_index_main {
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  min-width: 1400px;
  .header,
  .footer {
  }
  .header {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      overflow: hidden;
      height: 250px;
    }
    .salesBox,.weatherBox,.monthSalesBox {
       border-radius: 2em;
         background-color: #0b1f44;
    }
    .weatherBox {
      flex-direction: column;
      div {
        padding: 0.5em;
        height: 50%;
      }
      .top {
        border-bottom: 1px solid #ffffff;
      }
      .bottom {
      }
    }
    .salesBox,.monthSalesBox{
      width: 25em;
    }
  }
  .center {
  }
  .footer {
    width: 90%;
    .top {
      margin: 1em 2em;
      font-weight: bold;
    }
    .content {
    }
    background-color: #0b1f44;
    border-radius: 2em;
  }
}
</style>
