<template>
  <div class="about_index">
    <Nave :arr="arr"></Nave>
    <div class="firstPane">
      <div class="image"></div>
      <div class="content">
        <div class="pane">
          <div class="title">
            企业使命 —
          </div>
          <div class="content">
            用新商业模式和技术升级助力政企
            组织走向数字经济时代
          </div>
        </div>
        <div class="line"></div>
        <div class="pane">
          <div class="title">
            企业愿景 —
          </div>
          <div class="content2">
          成为产业链价值提升的卓越贡献者
          </div>
        </div>
        <div class="line"></div>
        <div class="pane">
          <div class="title2">
            价值观 —
          </div>
          <div class="content3">
            客户为先，助力客户成功效率优先，提倡扁平化的组织自我激励，提倡终身学习
          </div>
        </div>
      </div>
    </div>
    <div class="secondPane">
      <div class="seventhPane-content1">CONTACT</div>
      <div class="seventhPane-content2">
        开始你的数字化服务之旅，请联系我们
        —
      </div>
      <div class="seventhPane-phoneIcon"></div>
      <div class="seventhPane-phoneNumber">138-2523-1160</div>
      <div class="seventhPane-address">
        办公地址：深圳市南山区高新南七道惠恒大楼二期406
        <!-- 工作时间：周一至周五 10:00-18:30 -->
      </div>
      <div class="seventhPane-QRcodeBackgroundColor">
        <div class="seventhPane-QRcode"></div>
      </div>
      <div class="seventhPane-content3">我们的微信随时待候您的垂询</div>
      <div class="seventhPane-copyRight"><a style="color:rgba(213,213,213,1); text-decoration:none;" href="http://www.beian.miit.gov.cn" target="_blank">Copyright  2016-2020 Xiaochengxu. All rights reserved.    粤ICP备18003699号</a></div>
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
