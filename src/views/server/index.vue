<template>
  <div class="server_index">
    <Nave :arr="arr"></Nave>
    <div class="firstPane">
      <div class="content1">SERVICE</div>
      <div class="content2">
        竭尽所能让客户的想法成为现实
—
      </div>
      <div class="pane">
        <div class="subPane1">
          <div class="title">数字化咨询</div>
          <div class="content">
            通过对客户的背景与行业调研，结合专业的行业分析报告，了解产业链上下游各环节，关键角色，企业的定位，传统的利益格局，确定企业的数字化战略。寻找最小突破口，以点作为切入，把业务流程在线化数据化。再由点到面进行延伸，最终让商业变得更加精准，高效。
          </div>
        </div>
        <div class="subPane2">
          <div class="title">产品设计</div>
          <div class="content">
            产品设计以企业数字化战略为导向，作为业务流程在线化和数据化的载体，通过友好的交互设计与用户进行互动，实现互联网作为工具的高效和便捷。
          </div>
        </div>
        <div class="subPane3">
          <div class="title">平台开发</div>
          <div class="content">
            搭建坚实且易于拓展的底层框架，按照规范化的流程进行项目开发，注重代码的简洁和质量，通过科学的方法和工具进行项目周期管理，按时按质交付产品，不负客户所托。
          </div>
        </div>
      </div>
      <div class="content3">
        如果您在以上领域有任何被服务的需求，欢迎第一时间与我们联系
      </div>
      <div class="connectUs" @click.stop="handleConnectUs">
        <div class="connectUsText">联系我们</div>
      </div>
    </div>
    <div class="lastPane">
      <div class="content1">FLOW</div>
      <div class="content2">
        我们的服务流程
—
      </div>
      <div class="line"></div>
      <div class="server-image">
        
      </div>
      <div class="copyRight">
        <a style="color:rgba(213,213,213,1); text-decoration:none;" href="http://www.beian.miit.gov.cn" target="_blank">Copyright  2016-2020 Xiaochengxu. All rights reserved.    粤ICP备18003699号</a>
      </div>
    </div>
    <ConnectUs class="connectUsDialog" v-show="dialogVisible2" :maskHide="true" :isDisabled="false">
      <div class="closeBottom" @click.stop="handleCloseDialog2">
        <div class="closeIcon"></div>
      </div>
      <div class="phoneIcon"></div>
      <div class="phoneNumber">138-2523-1160</div>
      <div class="address">
        办公地址：深圳市南山区高新南七道惠恒大楼二期509
      </div>
      <div class="QRcodeContainer">
        <div class="QRimage"></div>
      </div>
      <div class="content">我们的微信随时待候您的垂询</div>
    </ConnectUs>
  </div>
</template>

<script>
import Nave from '../../components/navigation/index.vue'
export default {
  components: {
    Nave
  },
  data() {
    return{
      dialogVisible2: false,
      arr: ['index', 'index line', 'index']
    }
  },
  methods: {
    handleConnectUs() {
      this.dialogVisible2 = true
    },
    handleCloseDialog2() {
      this.dialogVisible2 = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "scss">
 @import "./index.scss";
</style>
