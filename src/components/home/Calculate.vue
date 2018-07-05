<template>
  <div v-if="isShow">
    <input class="inputValue" v-on:input="firstParamChange" v-bind:value="firstParam" type="number"
           placeholder="value1"/>
    <span>+</span>
    <input class="inputValue" v-on:input="secondParamChange" v-bind:value="secondParam" type="number"
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
          let value
          switch (this.name) {
            case "addInput1":
              value = this.$store.state.a.firstParam
              break
            case "addInput2":
              value = this.$store.state.b.firstParam
              break
          }
          return value
        },
        set: function (newValue) {
          switch (this.name) {
            case "addInput1":
              this.$store.commit('a/setFirstParam', newValue)
              break
            case "addInput2":
              this.$store.commit('b/setFirstParam', newValue)
              break
          }
        }
      },
      secondParam: {
        get: function () {
          let value
          switch (this.name) {
            case "addInput1":
              value = this.$store.state.a.secondParam
              break
            case "addInput2":
              value = this.$store.state.b.secondParam
              break
          }
          return value
        },
        set: function (newValue) {
          switch (this.name) {
            case "addInput1":
              this.$store.commit('a/setSecondParam', newValue)
              break
            case "addInput2":
              this.$store.commit('b/setSecondParam', newValue)
              break
          }
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
      },
      secondParamChange(evt) {
        switch (this.name) {
          case "addInput1":
            this.$store.commit('a/setSecondParam', evt.target.value)
            break
          case "addInput2":
            this.$store.commit('b/setSecondParam', evt.target.value)
            break
        }
      }
    }
  }
</script>

<style scoped>
  .inputValue {
    width: 60px;
  }

</style>
