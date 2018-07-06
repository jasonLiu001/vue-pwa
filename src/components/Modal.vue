<template>
  <div v-if="isShow" class="modal">
    <!-- 标题加正文 -->
    <div>
      <h3 class="title">{{title}}</h3>
      <p>{{content}}</p>
    </div>

    <!--按钮操作-->
    <div style="text-align: center;">
      <input type="button" v-on:click="onClickCloseBtn($event)" value="关闭"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "modalComponent",
    props: {
      title: String,
      content: String
    },
    data: function () {
      return {
        isShow: false
      }
    },
    methods: {
      show() {
        this.isShow = true
      },
      hide() {
        this.isShow = false
      },
      onClickCloseBtn(evt) {
        console.log(evt)
        this.hide()
      }
    }
  }
</script>

<style scoped>
  .modal{
    width: 100%;
  }

  .title {
    text-align: center;
    background-color: #484848;
    color: #fff;
  }
</style>
