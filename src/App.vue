<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped lang="scss">
@import "./globalCss.scss";
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .4s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: .2;
// }

</style>
