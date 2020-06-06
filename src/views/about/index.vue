<template>
  <div class="about_index">
    <Nave :arr="arr"></Nave>
    <div class="hezuoyiyuan">
      <div class="diandian1"></div>
      <div class="diandian2"></div>
      <div class="hezuoyiyuanzi"></div>
    </div>

    <div class="ditu">

    </div>

    <div class="yiyuantubiao">

    </div>
  </div>
</template>

<script>
import Nave from '../../components/navigation/index'
export default {
  components: {
    Nave
  },
  data() {
    return{
      arr: ['index', 'index', 'index line']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "scss">
@import "./index.scss";
</style>
