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
    props: {
      name: String
    },
    computed: {
      firstParam: {
        get: function () {
          return this.$store.state.a.firstParam
        },
        set: function (newValue) {
          this.$store.commit('a/setFirstParam', newValue)
        }
      },
      secondParam: {
        get: function () {
          return this.$store.state.a.firstParam
        },
        set: function (newValue) {
          this.$store.commit('a/setFirstParam', newValue)
        }
      }
    },
    data: function () {
      return {
        isShow: false // 控制自身是否显示
      }
    },
    methods: {
      doCalculate(evt) {
        switch (this.name) {
          case "addInput1":
            this.$store.commit('a/calculateTotal')
            break
          case "addInput2":
            this.$store.commit('b/calculateTotal')
            break
        }
        // 计算完成后，隐藏自身
        this.isShow = false
      },
      firstParamChange(evt) {
        switch (this.name) {
          case "addInput1":
            this.$store.commit('a/setFirstParam', evt.target.value)
            break
          case "addInput2":
            this.$store.commit('b/setFirstParam', evt.target.value)
            break
        }
        // this.$emit('showTotal', {first: evt.target.value, second: this.secondParam, total: '?'})
      },
      secondParamChange(evt) {
        switch (this.name) {
          case "addInput1":
            this.$store.commit('a/setSecondParam', evt.target.value)
            break
          case "addInput2":
            this.$store.commit('a/setSecondParam', evt.target.value)
            break
        }
        // this.$emit('showTotal', {first: this.firstParam, second: evt.target.value, total: '?'})
      }
    }
  }
</script>

<style scoped>
  .inputValue {
    width: 60px;
  }

</style>
