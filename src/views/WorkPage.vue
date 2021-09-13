<template>
  <div class='WorkView'>
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header style="padding:0;margin:0">
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
  // position: absolute;
  // top: 0;
  // left: 0;
  overflow: hidden;
  min-width: 100%;
  min-height: 100%;
  .el-aside {
    height: 969px;
    background-color: #0f2850;
  }
  .el-main {
    height: calc(969PX - 90PX);
    background-color: #182f59;
    padding: 15px 0;
  }
}
.Box {
}
</style>
