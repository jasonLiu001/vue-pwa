<template>
  <div>
    <v-app>
      <!--工具栏-->
      <v-toolbar app>
        <v-toolbar-title>VuetifyJS</v-toolbar-title>
      </v-toolbar>

      <v-navigation-drawer app></v-navigation-drawer>

      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>

      <v-footer>
        <footer-component></footer-component>
      </v-footer>
    </v-app>
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
