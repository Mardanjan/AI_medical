<template>
  <div class="case_index">
    <Nave :arr="arr"></Nave>
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