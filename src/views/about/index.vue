<template>
  <div class="about_index">
    <Nave :arr="arr"></Nave>
    <div class="meitibaodao">
      <div class="content">
        <div class="meiti"></div>
        <div class="content1">
          <div class="c1">
            <div class="icon">人工智能诊断系统</div>
            <div class="head">
              结合AI、大数据等技术优势，致力于配合国家分级诊疗制度，推动医疗公平，解决膀胱癌早筛和预防复查难问题.
            </div>
            <div class="body">
              AI影像筛查，人工智能极速分析，医师分析导入，电子档案管理，全面打造智能医疗诊断筛查系统
            </div>
            <div class="foot">
            </div>
          </div>
          <div class="c2">
            <div class="icon"></div>
            <div class="head">AI轻医疗上线，助力我国智慧医疗发展！</div>
            <div class="body">2020年5月，AI轻医疗实现与潮州、沈阳、深圳三市首度合作</div>
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
