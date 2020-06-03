<template>
  <div class="case_index">
    <Nave :arr="arr"></Nave>
    <div class="content">
      <div class="content1">SOLUTION</div>
      <div class="content2">
        已为80+企业组织提供专业的数字化解决方案
—
      </div>
      <div class="pane1">
        <div class="pane1-image1" @click.stop="handleDialog(1)"></div>
        <div class="pane1-image2" @click.stop="handleDialog(2)"></div>
        <div class="pane1-image3" @click.stop="handleDialog(3)"></div>
      </div>
      <!-- <div class="space"></div> -->
      <div class="pane2">
        <div class="pane2-image1" @click.stop="handleDialog(4)"></div>
        <div class="pane2-image2" @click.stop="handleDialog(5)"></div>
        <div class="pane2-image3" @click.stop="handleDialog(6)"></div>
      </div>
      <div class="moreCline">
        - 更多客户案例正在整理中 -
      </div>
      <div class="connectUs" @click.stop="handleConnectUs">
        联系我们
      </div>
    </div>
    <div class="copyRight">
        <div class="copyRightText">
          <a style=" color:rgba(153,153,153,1); text-decoration:none;" href="http://www.beian.miit.gov.cn" target="_blank">Copyright  2016-2020 Xiaochengxu. All rights reserved.    粤ICP备18003699号</a>
        </div>
    </div>
    <jlPopup class="dialog" v-show="dialogVisible" :maskHide="true" :isDisabled="false">
        <div :class="dynamicClassName">
          <div class="closeBottomContainer" @click.stop="handleDialogClose">
            <div class="closeBottom"></div>
          </div>
        </div>
        <div class="container">
          <div class="content">
              <h1 class="title1">项目背景：</h1>
              {{ projectBackgroud }}
              <div class="content3">
                <h1 class="title2">项目服务：</h1> 
              <div >
                {{ projectServer }}
              </div>
              </div>
          </div>
        </div>
    </jlPopup>
    <ConnectUs class="connectUs" v-show="dialogVisible2" :maskHide="true" :isDisabled="false">
      <div class="closeBottom" @click.stop="handleCloseDialog2">
        <div class="closeIcon"></div>
      </div>
      <div class="phoneIcon"></div>
      <div class="phoneNumber">400-877-98688</div>
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
      return {
        dialogVisible: false,
        dialogVisible2: false,
        projectBackgroud: '',
        projectServer: '',
        dynamicClassName: '',
        arr: ['index line', 'index', 'index']
      }
    },
  methods: {
    handleDialog(index) {
        this.dynamicClassName = 'pane' + index
        // this.dialogVisible = true
        this.projectBackgroud = 'ZEALER是由互联网科技领域的知名人物王自如创建的，是国内科技媒体的重要平台。平台以打造科技生活第一站为宗旨，为用户生产高质量的视频内容。经过多年的发展，目前平台的注册用户已经有数百万，在活动高峰期，同时在线用户达到数十万人。'
        this.projectServer = '经过多年的发展与迭代，原有平台已经积累了数百万用户，而平台的功能已经过于冗余，数据库结构过于庞杂，平台性能存在明显的瓶颈。深圳市小程序科技团队，作为ZEALER的数字化战略服务商，通过与ZEALER团队的咨询和沟通，对平台的规划进行重新梳理，并确定平台重构方案。通过搭建一套高可用的分布式架构，将不同服务进行拆分部署，解决平台拓展性和性能瓶颈问题，为平台的下一步飞跃打下坚实的架构基础。'
    },
    handleDialogClose() {
      this.dialogVisible = false
      this.projectServer = ''
      this.projectBackgroud = ''
    },
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
<style lang="scss" >
@import "./index.scss"
</style>