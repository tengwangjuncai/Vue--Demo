<template>
  <div>
    {{hello}}
    <slot name="header" >no header</slot>
    <slot name="footer" >no footer</slot>
    <li class="item" @click="handleDelete">{{content}}</li>
  </div>
</template>

<script>
export default {
  props: ['content','index'],
  data() {
    return{
      hello:'i am component a'
    }
  },
  methods: {
    handleDelete  () {
      // alert(this.index)
      this.$emit('delete', this.index)
    }
  }

}
</script>

<style scoped>
   /*//scoped 作用域  仅限于该组件    去掉的话 会全局有效  会影响*/
  .item {
    color: green;
  }

</style>
