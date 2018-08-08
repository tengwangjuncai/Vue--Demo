<template>
  <div>
    <div>
      <input v-model="inputValue" v-focus/>
      <button @click="handleSumit">提交</button>

      <!--通过 :is="currentView" 来动态绑定组件-->
      <!--<p :is="currentView"></p>-->

    </div>
    <ul>
        <todo-item v-for="(item, index) of  list" :key="index" :content="item" :index="index" @delete="handleDelete">

          <!--插槽  slot 另一种父组件向子组件传值的方式   可以通过key 来对应  如 slot="header"-->
          <!--子组件要相应的用solt 接收值-->
          <p slot="header">123</p>
          <p slot="footer">345</p>


          <span></span>
        </todo-item>
    </ul>

    <div>
      <button @click="show = !show">Toggle</button>
      <transition name="my-trans" mode="out-in">
        <!--<p :is="currentView"></p>  动态组件 也可用 过渡动画-->
        <!--<p v-show="show">i am show</p>-->

        <!--两个标签名一样 p  如果没有指定 key 不会走过渡动画-->
        <p v-color="'red'" v-if="show" key="1">i am show</p>
        <p v-color="'green'" v-else key="2">not in show</p>



      </transition>

    </div>
  </div>
</template>

<script>

import TodoItem  from './components/TodoItem'
export default {

  directives: {
    color: function (el,binding) {
      el.style.color = binding.value
    },
    focus:{
      inserted(el,binding){
        el.focus()
      }

    }

  },
    components: {
      'todo-item' : TodoItem
    },

  //以前   data: {}  是个对象

  //现在   变成一个函数  返回值是数据
     data : function () {
           return {
             inputValue: '',
             list: [],
             show: true
           }
     },
   methods : {
     handleSumit: function () {

         this.list.push(this.inputValue),
         this.inputValue = ''
     },
     handleDelete:  function (index) {

       this.list.splice(index, 1)
     },
     ssshow: function () {
       this.show = !this.show
     }
   }
}
</script>

<style>

  .fade-enter-active,.fade-leave-active{
    transition: all .5s ease-out;
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;



  }

  .my-trans-enter-active, .my-trans-leave-active{
    transition: all .5s ease-out;
  }

  .my-trans-enter-active {
    transform: translateY(-500px);
    opacity: 0;
  }
  .my-trans-leave-active{
    transform: translateY(500px);
    opacity: 0;
  }




</style>
