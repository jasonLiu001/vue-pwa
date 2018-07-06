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
        secondParam: '',
        events: {
          onCalculating: 'onCalculating'
        }
      }
    },
    methods: {
      show() {
        this.isShow = true
      },
      hide() {
        this.isShow = false
      },
      doCalculate(evt) {
        let totalResult = this.firstParam + this.secondParam
        // 触发计算事件
        this.$emit(this.events.onCalculating, {
          firstParam: this.firstParam,
          secondParam: this.secondParam,
          total: totalResult
        })
        // 计算完成后，隐藏自身
        this.isShow = false
      },
      firstParamChange(evt) {
        // 触发计算事件
        this.$emit(this.events.onCalculating, {firstParam: evt.target.value, secondParam: this.secondParam, total: '?'})
      },
      secondParamChange(evt) {
        // 触发计算事件
        this.$emit(this.events.onCalculating, {firstParam: this.firstParam, secondParam: evt.target.value, total: '?'})
      }
    }
  }
</script>

<style scoped>
  .inputValue {
    width: 60px;
  }

</style>
