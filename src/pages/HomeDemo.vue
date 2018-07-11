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

    <div class="row">
      <div>
        <button v-on:click="showModal1('对话框1','对话框1')">显示对话框1</button>
        <button v-on:click="showModal2('对话框2','对话框2')">显示对话框2</button>
      </div>
      <modal-component ref="modalComponent1" v-bind:title="modal1.title"
                       v-bind:content="modal1.content"></modal-component>
      <modal-component ref="modalComponent2" v-bind:title="modal2.title"
                       v-bind:content="modal2.content"></modal-component>
    </div>

    <div class="row">
      <alert-component name="alert" content="ok"></alert-component>
    </div>

  </div>
</template>

<script>
  import CalculateComponent from '../components/Calculate'
  import ModalComponent from '../components/Modal'
  import AlertComponent from '../components/Alert'

  function InputData() {
    this.firstParam = '?'
    this.secondParam = '?'
    this.total = '?'
  }

  function ModalData() {
    this.title = '标题'
    this.content = '正文'
  }

  export default {
    name: "homeDemo",
    data: function () {
      return {
        inputA: new InputData(),
        inputB: new InputData(),
        modal1: new ModalData(),
        modal2: new ModalData()
      }
    },
    components: {
      CalculateComponent, ModalComponent, AlertComponent
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
            this.$refs.addInput1.show()
            break
          case 'addInput2':
            this.$refs.addInput2.show()
            break
        }
      },
      redirectToAbout() {
        this.$router.push('About')
      },
      showModal1(title, conent) {
        this.modal1.title = title
        this.modal1.content = conent
        this.$refs.modalComponent1.show()
      },
      showModal2(title, conent) {
        this.modal2.title = title
        this.modal2.content = conent
        this.$refs.modalComponent2.show()
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
