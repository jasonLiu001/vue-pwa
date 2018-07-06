<template>
  <transition name="fade">
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
  </transition>
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
  .modal {
    width: 100%;
  }

  .title {
    text-align: center;
    background-color: #484848;
    color: #fff;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
