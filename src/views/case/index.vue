<template>
  <div class="case_index">
    <Nave :arr="arr"></Nave>
    <div class="aboutus">
      <!-- <div class="connectus"></div> -->
      <div class="aboutuszi"> ABOUT US</div>
    </div>
    <div class="gongsijieshao">
      <h2>公司介绍</h2>
      <hr>
      <p>AI轻医疗结合医疗和人工智能、大数据技术优势，以病人为中心，关注膀胱癌的预防、诊断、治疗和复诊
的全过程。辅助医生处理大量的放射性影像以及病理性影像信息，能够在一定程度上减轻医师的工作量和
压力。</p>
      <p>致力于推动医疗公平，应用于分级治疗。对于乡村和社区医院，医生相对缺乏经验，因此膀胱癌的智能诊
断，能给小医院提供一个重要的参考意见。</p>
      <p>为了加强膀胱癌的预防，AI轻医疗也应用于体检机构，能够使病人提前筛查、提前治疗。针对膀胱癌复发
率高的特点，产品还提供电子病历的功能，方便医生查询患者的就诊信息。</p>
    </div>
    <div class="connectus1">
      <div class="lianxiwomen">CONTACT US</div>
      <h2>联系我们</h2>
      <hr>
      <div class="dibu">
        <div class="fangkuai left">
          <p class="name">AI轻医疗 版权所有</p>
          <p class="email" style="font-size: 16px;">Copyright ©2020 www.kujijiku.com, All Rights Reserved.</p>
        </div>
        <div class="fangkuai right">
          <p class="name">商务合作</p>
          <p class="email"><b>系统咨询电话：</b>0755-123456</p>
          <p class="email"> <b>联系电话：</b>13433701733</p>
          <p class="email"> <b>邮件咨询：</b>994089500@qq.com</p>
          <!-- <p class="email">邮件咨询：994089500@qq.com</p> -->
        </div>
      </div>
    </div>
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