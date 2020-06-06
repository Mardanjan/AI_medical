<template>
  <div class="index-page">
    <Nave ></Nave>
    <!-- first pane -->
    <div class="firstPane">
      <div class="content1">
        致力于提供专业化智能化服务的膀胱癌诊断系统
      </div>
      <div class="content2">
        [  降低膀胱癌疾病误诊率  ]
      </div>
    </div>
  </div>
</template>

<script>
import Nave from '../../components/navigation/index.vue'
export default {
  name: 'HelloWorld',
  components: {
    Nave
  },
  props: {
    msg: String
  },
  created() {
    // console.log('jquery')
  },
  methods: {
    jump() {
      window.location.href="https://www.beian.miit.gov.cn";
    },
    handleJumpToCase() {
      this.$router.push({
        path: '/case'
      })
    },
    handleJumpToServer() {
      this.$router.push({
        path: '/server'
      })
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    handleJumpToAbout() {
      this.$router.push({
        path: '/about'
      })
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 @import "./firstPane.scss";
</style>
