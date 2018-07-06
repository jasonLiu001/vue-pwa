<script>
  export default {
    name: "alertComponent",
    props: {
      name: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      }
    },
    data: function () {
      return {
        list: ['Hello', '我是函数化组件']
      }
    },
    render: function (createElement) {
      if (this.list.length) {
        return createElement('div', this.list.map((item, index) => {
          return createElement('p', item)
        }))
      }
    }
  }
</script>

<style scoped>

</style>
