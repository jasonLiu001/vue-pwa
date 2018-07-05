<template>
  <div v-if="isShow">
    <input class="inputValue" type="text" placeholder="value1"/>
    <span>+</span>
    <input class="inputValue" type="text" placeholder="value2"/>
    <input type="button" v-on:click="doCalculate" value="计算"/>
  </div>
</template>

<script>
  export default {
    name: "calculateComponent",
    data: function () {
      return {
        isShow: false
      }
    },
    methods: {
      doCalculate(evt) {
        // 计算完成后，隐藏自身
        this.isShow = false
      }
    }
  }
</script>

<style scoped>
  .inputValue {
    width: 60px;
  }

</style>
