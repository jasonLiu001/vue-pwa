<template>
  <div class="container">
    <div class="row">

      <div>
        <span>?</span>+<span>?</span>=<span>?</span>
      </div>
      <input class="btnInput" type="button" v-on:click="showInputGroup('addInput1')" value="输入"></input>
      <calculate-component ref="addInput1"></calculate-component>
    </div>

    <div class="row">
      <div>
        <span>?</span>+<span>?</span>=<span>?</span>
      </div>
      <input class="btnInput" v-on:click="showInputGroup('addInput2')" type="button" value="输入"></input>
      <calculate-component ref="addInput2"></calculate-component>
    </div>

  </div>
</template>

<script>
  import CalculateComponent from '../components/home/Calculate'

  export default {
    name: "homePage",
    components: {
      CalculateComponent
    },
    data: function () {
      return {
        isShowInputGroup: false
      }
    },
    methods: {
      showInputGroup(name) {
        this.isShowInputGroup = true
        switch (name) {
          case 'addInput1':
            this.$refs.addInput1.isShow = true
            break
          case 'addInput2':
            this.$refs.addInput2.isShow = true
            break
        }
      },
      // 监听子组件的`showCalculate`事件
      showCalculate(isShowCalculate) {
        this.isShowInputGroup = isShowCalculate
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  .row {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #000009;
  }

</style>
