<template>
  <div class='' v-if="navList">
    <div class="line"></div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <template v-for="(item,indexD) in navList">
        <el-submenu v-if="item.list != null" :index='indexD.toString()' :key="indexD">
          <template slot="title">选项4</template>
          <el-menu-item :index='indexD.toString() + "-" + lisTindexD.toString()' v-for="(lisTitem,lisTindexD) in item.list" :key="lisTindexD">{{lisTitem.name}}</el-menu-item>
        </el-submenu>
        <el-menu-item :index='indexD.toString()' :key="indexD" v-if="item.list == null">{{item.name}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ["navList"],
  data() {
    return {
      activeIndex: "0",
      activeIndex2: "0",
    };
  },
  components: {},
  created() {},
  mounted() {
    console.log(this.navList);
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang='less' scoped>
</style>
