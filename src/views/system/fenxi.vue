<template>
<!-- 细胞计数 -->
  <div class="fenxi-page">
    <div class="head">
        <div class="active div" >临床检测</div>
        <div class="active div"> 病理检测</div>
    </div>
    <div class="content">
      <xibaojishu></xibaojishu>
    </div>
  </div>
</template>

<script>
import xibaojishu from '../../components/xibaojishu/index'
export default {
  components: {
    xibaojishu,
  },
  data: () => {
    return {

    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 @import "./fenxi.scss";
</style>
