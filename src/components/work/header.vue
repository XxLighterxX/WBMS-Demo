<template>
  <div class='works_header' ref="Box">
     <div class=""></div>
     <div></div>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){
      const Bheight = this.$refs.Box.offsetHeight
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.works_header{
    width: 100%;
    height: 100%;
    background-color: #0B1F44;
    display: flex;
    color: white;
}
</style>
