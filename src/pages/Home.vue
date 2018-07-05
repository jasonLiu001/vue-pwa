<template>
  <div class="container">
    <div class="row">
      <div class="inner_row">
        <div>
          <span>{{addInputAFirst}}</span>+<span>{{addInputASecond}}</span>=<span>{{addInputATotal}}</span>
        </div>
        <input class="btnInput" type="button" v-on:click="showInputGroup('addInput1')" value="输入"></input>
      </div>
      <calculate-component name="addInput1" ref="addInput1"></calculate-component>
    </div>

    <div class="row">
      <div class="inner_row">
        <div>
          <span>{{addInputBFirst}}</span>+<span>{{addInputBSecond}}</span>=<span>{{addInputBTotal}}</span>
        </div>
        <input class="btnInput" v-on:click="showInputGroup('addInput2')" type="button" value="输入"></input>
      </div>
      <calculate-component name="addInput2" ref="addInput2"></calculate-component>
    </div>

    <div class="row">
      <a href="javascript:void(0);" v-on:click="redirectToAbout">跳转到关于页面</a>
    </div>

  </div>
</template>

<script>
  import CalculateComponent from '../components/home/Calculate'
  import {mapState} from 'vuex'

  export default {
    name: "homePage",
    components: {
      CalculateComponent
    },
    computed: mapState({
      addInputAFirst(state) {
        return state.a.firstParam
      },
      addInputASecond(state) {
        return state.a.secondParam
      },
      addInputATotal(state) {
        return state.a.total
      },
      addInputBFirst(state) {
        return state.a.firstParam
      },
      addInputBSecond(state) {
        return state.a.secondParam
      },
      addInputBTotal(state) {
        return state.a.total
      }
    }),
    methods: {
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
