<template>
  <div v-if="isShow">
    <input class="inputValue" v-on:input="firstParamChange" v-model.number="firstParam" type="number"
           placeholder="value1"/>
    <span>+</span>
    <input class="inputValue" v-on:input="secondParamChange" v-model.number="secondParam" type="number"
           placeholder="value2"/>
    <input type="button" v-on:click="doCalculate" value="计算"/>
  </div>
</template>

<script>
  export default {
    name: "calculateComponent",
    data: function () {
      return {
        isShow: false, // 控制自身是否显示
        firstParam: '',
        secondParam: ''
      }
    },
    methods: {
      doCalculate(evt) {
        let total = this.firstParam + this.secondParam

        this.$emit('showTotal', {first: this.firstParam, second: this.secondParam, total: total})
        // 计算完成后，隐藏自身
        this.isShow = false
      },
      firstParamChange(evt) {
        this.$emit('showTotal', {first: evt.target.value, second: this.secondParam, total: '?'})
      },
      secondParamChange(evt) {
        this.$emit('showTotal', {first: this.firstParam, second: evt.target.value, total: '?'})
      }
    }
  }
</script>

<style scoped>
  .inputValue {
    width: 60px;
  }

</style>
