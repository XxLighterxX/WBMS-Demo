<template>
  <div class='LoginView'>
    <Header></Header>
    <div class="contentBox FlexCenter">
      <div class="loginBox FlexCenter">
        <div class="left">
          <p class="title">测试文章主标题</p>
          <p class="contents">内容.......</p>
        </div>
        <div class="right">
          <p :class="{'pActive':modelActive == 1 }" @click="aBtn">账号密码登陆</p>
          <p :class="{'pActive':modelActive == 2 }" @click="bBtn">注册</p>
          <div v-show="modelActive == 1">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-input v-model="input" placeholder="请输入内容" show-password=true></el-input>
            <el-button type="primary">主要按钮</el-button>
          </div>
           <div v-show="modelActive == 2">
            <el-input v-model="input" placeholder="请输入用户名"></el-input>
            <el-input v-model="input" placeholder="请输入登陆" show-password=true></el-input>
            <el-button type="primary">主要按钮</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
export default {
  data() {
    return {
      input: "",
      modelActive: 1, //1登陆 2注册
    };
  },
  components: {
    Header,
  },
  created() {},
  mounted() {},
  methods: {
    aBtn() {
      this.modelActive = 1;
    },
    bBtn() {
      this.modelActive = 2;
    },
  },
};
</script>
<style lang='less' scoped>
.LoginView {
  .contentBox {
    width: 100%;
    height: 100vh;
    min-width: 800px;
    height: 80vh;
    // line-height: 80vh;
    min-height: 800px;
    text-align: center;
    background: url("../assets/image/1.jpg") no-repeat;
    background-size: cover;
    .loginBox {
      width: calc(50em - 8em);
      min-width: 30em;
      height: calc(30em - 8em);
      min-width: 20em;
      margin-left: 3em;
      .left,
      .right {
        padding: 4em 4em;
        p {
          font-family: Arial;
        }
      }
      .left {
        width: 40%;
        background-color: rgba(0, 0, 0, 0.3);
        height: 100%;
        color: white;
        .title {
          font-size: 1.2rem;
        }
        .contents {
          font-size: 1rem;
          margin-top: 3em;
        }
      }
      .right {
        width: 60%;
        height: 100%;
        background-color: rgba(255, 255, 255);
        p {
          border-bottom: 1px solid transparent;
          display: inline-block;
          width: 50%;
          text-align: center;
          padding-bottom: 0.3em;
          cursor: pointer;
          transition: 0.3s;
        }
        .pActive {
          border-bottom: 1px solid red;
        }
        .el-input {
          width: 100%;
          margin-top: 1em;
          height: 40px;
        }
        .el-button {
          width: 100%;
          margin-top: 2em;
        }
      }
    }
  }
}
</style>
