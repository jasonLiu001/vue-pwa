<template>
  <v-app>
    <!--侧导航-->
    <nav-bar-component v-model="drawer"></nav-bar-component>

    <!--头部-->
    <header-component v-on:click.native="showDrawer"></header-component>

    <!--正文-->
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <!--页底-->
    <footer-component></footer-component>
  </v-app>
</template>

<script>
  import HeaderComponent from './components/Header'
  import FooterComponent from './components/Footer'
  import NavBarComponent from './components/NavBar'

  export default {
    components: {
      HeaderComponent, FooterComponent, NavBarComponent
    },
    methods: {
      showDrawer() {
        this.drawer = !this.drawer
      }
    },
    name: "app",
    data() {
      return {
        drawer: false,
        title: 'Your Logo',
        posts: [
          {
            title: 'Fusce ullamcorper tellus',
            content: 'Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
          },
          {
            title: 'Donec vitae suscipit lectus, a luctus diam.',
            content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
          },
          {
            title: 'Vestibulum condimentum quam',
            content: 'At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
