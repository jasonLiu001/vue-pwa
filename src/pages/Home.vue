<template>
  <div class="container">
    <div class="row">
      <div class="inner_row">
        <div>
          <span>{{addInput1.first}}</span>+<span>{{addInput1.second}}</span>=<span>{{addInput1.total}}</span>
        </div>
        <input class="btnInput" type="button" v-on:click="showInputGroup('addInput1')" value="输入"></input>
      </div>
      <calculate-component v-on:showTotal="addInput1Event" ref="addInput1"></calculate-component>
    </div>

    <div class="row">
      <div class="inner_row">
        <div>
          <span>{{addInput2.first}}</span>+<span>{{addInput2.second}}</span>=<span>{{addInput2.total}}</span>
        </div>
        <input class="btnInput" v-on:click="showInputGroup('addInput2')" type="button" value="输入"></input>
      </div>
      <calculate-component v-on:showTotal="addInput2Event" ref="addInput2"></calculate-component>
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
        addInput1: {
          first: '?',
          second: '?',
          total: '?'
        },
        addInput2: {
          first: '?',
          second: '?',
          total: '?'
        }
      }
    },
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
      addInput1Event(result) {
        this.addInput1 = result
      },
      addInput2Event(result) {
        this.addInput2 = result
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
