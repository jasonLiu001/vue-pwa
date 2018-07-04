<template>
  <div>
    <!--公共头部-->
    <header>
      <HeaderComponent></HeaderComponent>
    </header>

    <!--页面主体-->
    <main>
      <router-view></router-view>
    </main>

    <!--公共底部-->
    <footer>
      <footer-component></footer-component>
    </footer>
  </div>
</template>

<script>
  import HeaderComponent from './components/Header'
  import FooterComponent from './components/Footer'

  export default {
    name: "app",
    components: {
      HeaderComponent, FooterComponent
    }
  }
</script>

<style scoped>

</style>
