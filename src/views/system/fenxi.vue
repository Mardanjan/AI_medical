<template>
<!-- 细胞计数 -->
  <div class="fenxi-page">
    <el-row :gutter="20" class="top">
      <el-col :span="14" :offset="5">
        <div class="head">
          <el-menu
          :default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#072145"
          text-color="#ffffff"
          active-text-color="#eac747"
          @select="handleSelect">
            <el-menu-item index="1" class="el-menu-item">细胞计数</el-menu-item>
            <el-menu-item index="2" class="el-menu-item">细胞检测</el-menu-item>
            <el-menu-item index="3" class="el-menu-item">膀胱癌分类</el-menu-item>
            <el-menu-item index="4" class="el-menu-item">膀胱癌分割</el-menu-item>
            <el-menu-item index="5" class="el-menu-item">膀胱癌感兴趣部分分割</el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>

    <el-row  :gutter="20" >
      <el-col :span="12" :offset="6" class="body">
        <xibaojishu v-if="index == 1"></xibaojishu>
        <xibaojiance v-if="index == 2"></xibaojiance>
        <fenlei v-if="index == 3"></fenlei>
        <fenge v-if="index == 4"></fenge>
        <xingqufenge v-if="index == 5"></xingqufenge>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import xibaojishu from '../../components/xibaojishu/index'
import xibaojiance from '../../components/xibaojiance/index'
import fenge from '../../components/fenge/index'
import xingqufenge from '../../components/xingqubufen/index'
import fenlei from '../../components/fenlei/index'
export default {
  components: {
    xibaojishu,
    xibaojiance,
    fenge,
    xingqufenge,
    fenlei
  },
  data: () => {
    return {
      index: 1
    }
  },
  created() {
  },
  methods: {
    handleSelect(index) {
      this.index = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 @import "./fenxi.scss";
</style>
