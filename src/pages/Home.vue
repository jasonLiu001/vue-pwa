<template>
  <div class="container">
    <div class="row">
      <div class="inner_row">
        <div>
          <span>{{inputA.firstParam}}</span>+<span>{{inputA.secondParam}}</span>=<span>{{inputA.total}}</span>
        </div>
        <input class="btnInput" type="button" v-on:click="showInputGroup('addInput1')" value="输入"></input>
      </div>
      <calculate-component v-on:onCalculating="onAddInputACalculating" ref="addInput1"></calculate-component>
    </div>

    <div class="row">
      <div class="inner_row">
        <div>
          <span>{{inputB.firstParam}}</span>+<span>{{inputB.secondParam}}</span>=<span>{{inputB.total}}</span>
        </div>
        <input class="btnInput" v-on:click="showInputGroup('addInput2')" type="button" value="输入"></input>
      </div>
      <calculate-component v-on:onCalculating="onAddInputBCalculating" ref="addInput2"></calculate-component>
    </div>

    <div class="row">
      <a href="javascript:void(0);" v-on:click="redirectToAbout">跳转到关于页面</a>
    </div>

  </div>
</template>

<script>
  import CalculateComponent from '../components/home/Calculate'

  export default {
    name: "homePage",
    data: function () {
      return {
        inputA: {
          firstParam: '?',
          secondParam: '?',
          total: '?'
        },
        inputB: {
          firstParam: '?',
          secondParam: '?',
          total: '?'
        }
      }
    },
    components: {
      CalculateComponent
    },
    methods: {
      onAddInputACalculating(data) {
        this.inputA = data
      },
      onAddInputBCalculating(data) {
        this.inputB = data
      },
      showInputGroup(name) {
        switch (name) {
          case 'addInput1':
            this.$refs.addInput1.isShow = true
            break
          case 'addInput2':
            this.$refs.addInput2.isShow = true
            break
        }
      },
      redirectToAbout() {
        this.$router.push('About')
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
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #000009;
  }

  .inner_row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

</style>
