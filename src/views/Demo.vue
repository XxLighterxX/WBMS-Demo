<template>
  <div>
      <div class="box">
          <div v-drag class="drag" @click="handleDragClick">
          
      </div>
      <div v-drag class="drag" @click="handleDragClick">
          
      </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  components: {},
  created() {},
  mounted() {

  },
  methods: {
       handleDragClick(e){
    //        console.log(e.clientX,e.clientY,e)
    // if(e.clientY <= 100){
    //     e.clientY = 101
    // }
  // 判断拖拽组件的状态
	let isDrag = false;
	try {
      isDrag = e.target.getAttribute('ele-flag') === 'true';
	}catch (e) {
		}
	if(isDrag){
		return;
     }
	 // 当推拽组件未在 拖动状态 执行点击事件
	 // todo 下面是执行点击事件的代码
   }
  },
  // 自定义指令
//    directives:{
//             drag(el,bindings){
//                 el.onmousedown = function(e){
//                     var disx = e.pageX - el.offsetLeft;
//                     var disy = e.pageY - el.offsetTop;
//                     document.onmousemove = function (e){
//                         el.style.left = e.pageX - disx+'px';
//                         el.style.top = e.pageY - disx+'px';
//                     }
//                     document.onmouseup = function(){
//                         document.onmousemove = document.onmouseup = null;
//                     }
//                 }
//             }
//         }
};
</script>
<style lang='less' scoped>
.box{
  overflow: hidden;
  margin: 0 auto;
  width: 300px;
  height: 300px;
  border: 1px solid red;
  position: relative;

}
.drag{
            width: 100px;
            height: 100px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: red;
            background-image: url('../assets/image/1.jpg');
            background-size: cover;
}

</style>
