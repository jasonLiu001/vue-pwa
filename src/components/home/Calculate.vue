<template>
  <div>
    <input class="inputValue" type="text" placeholder="value1"/>
    <span>+</span>
    <input class="inputValue" type="text" placeholder="value2"/>
    <input type="button" value="计算"/>
  </div>
</template>

<script>
  export default {
    name: "calculateComponent"
  }
</script>

<style scoped>
  .inputValue {
    width: 60px;
  }

</style>
