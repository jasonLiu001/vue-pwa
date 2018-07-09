<template>
  <v-app>
    <v-navigation-drawer app miniVariant v-on:resize="navigatorMini">
      <v-list>
        <v-avatar size="125px">
          <img
            class="img-circle elevation-7 mb-1"
            src="https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/lists/1.jpg"
          >
        </v-avatar>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app></v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer></v-footer>
  </v-app>
</template>

<script>
  import HeaderComponent from './components/Header'
  import FooterComponent from './components/Footer'

  export default {
    name: "app",
    components: {
      HeaderComponent, FooterComponent
    },
    methods: {
      navigatorMini(result) {
        console.log(result)
      }
    },
    data() {
      return {
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
