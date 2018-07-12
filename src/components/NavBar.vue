<template>
  <v-navigation-drawer v-bind:value="value" v-model="drawer" app></v-navigation-drawer>
</template>

<script>
  export default {
    props: {
      value: {
        required: false
      }
    },
    watch: {
      value(val) {
        this.drawer = val
      }
    },
    data() {
      return {
        drawer: false
      }
    },
    name: "navBarComponent"
  }
</script>

<style scoped>

</style>
