<template>
  <div class="box">
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
      <div class="userLine">
         <UserLine></UserLine>
      </div>
      <div class="tips">
          <div class="title FlexCenter">
             <p>123</p>
             <p>123123</p>
          </div>
      </div>
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
  </div>
</template>

<script>
import Customzed from "../../echarts/Customized_Gauge.vue";
import Bar from "../../echarts/Bar.vue";
import LineOne from '../../echarts/Line.vue'
import UserLine from '../../echarts/UserLine.vue'
export default {
  data() {
    return {};
  },
  components: {
    Customzed,
    Bar,
    LineOne,
    UserLine
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang='less' scoped>
.box{
  height: 100%;
  min-height: 100%;
  width: 100%;
  min-width: 100%;
}
.works_index_main {
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  // min-width: 1400px;
  // min-height: 600px;
  .header,
  .footer {
    height: 25%;
  }
  .header {
    width: 90%;
    height: 250PX;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      overflow: hidden;
      // height: 250px;
    }
    .salesBox,.weatherBox,.monthSalesBox {
        height: 100%;
        min-height: 250PX;
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
      min-width: 400PX;
    }
  }
  .center {
    width: 90%;
    display: flex;
    height: 300px;
    align-items: center;
    justify-content: space-between;
    .userLine{
      // height: 23em;
      width: 45em;
      height: 100%;
      border-radius: 2em;
      background-color: #0b1f44;
    }
    .tips{
      padding: 1em 2em;
      width: 71em;
      height: calc( 100% - 2em);
      border-radius: 2em;
      background-color: #0b1f44;
    }
  }
  .footer {
    width: 90%;
    height: 200px;
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
