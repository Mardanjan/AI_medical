<template>
  <div class="about_index">
    <Nave :arr="arr"></Nave>
    <div class="meitibaodao">
      <div class="content">
        <div class="meiti"></div>
        <div class="content1">
          <div class="c1">
            <div class="icon"></div>
            <div class="head">
              带动贫困地区医疗服务：偏远地区医生 感谢AI轻医疗帮助提高效率和准确率
            </div>
            <div class="body">
              X月X日，X省X市的A医生在加入使用AI 轻医疗后表示......
            </div>
            <div class="foot">
              2020.x.x
            </div>
          </div>
          <div class="c2">
            <div class="icon"></div>
            <div class="head">AI轻医疗发布，支援偏远地区治疗！</div>
            <div class="body">X年X月，AI轻医疗发布后，首先支援......</div>
          </div>
          <div class="c3">
            <div class="icon"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bottom"></div> -->
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
