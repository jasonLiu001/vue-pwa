<template>
  <v-toolbar v-bind:value="value" app>
    <v-btn flat v-on:click="showDrawer">
      <v-icon>menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    name: "headerComponent",
    props: {
      value: {
        required: false
      }
    },
    methods: {
      showDrawer() {
        this.$emit('showDrawer', this.value)
      }
    }
  }
</script>

<style scoped>

</style>
