<template>
  <div class='WorkView'>
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header  style="padding:0;margin:0">
          <Header></Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/work/header.vue";
import Aside from "../components/aside.vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Aside,
  },
  computed: {
    ...mapState({
      ...mapState("works", ["navList"]),
    }),
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang='less' scoped>
.WorkView {
  position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
  .el-aside {
    height: 100vh;
    background-color: #0F2850;
  }
  .el-main{
     background-color: #182F59;
  }
}
.Box {
}
</style>
