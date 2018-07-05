<template>
  <div class="container">
    <div class="row">

      <div>
        <span>?</span>+<span>?</span>=<span>?</span>
      </div>
      <input class="btnInput" type="button" value="输入"></input>
      <calculate-component></calculate-component>
    </div>

    <div class="row">
      <div>
        <span>?</span>*<span>?</span>=<span>?</span>
      </div>
      <input class="btnInput" type="button" value="输入"></input>
      <calculate-component></calculate-component>
    </div>

  </div>
</template>

<script>
  import CalculateComponent from '../components/home/Calculate'

  export default {
    name: "homePage",
    components: {
      CalculateComponent
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
