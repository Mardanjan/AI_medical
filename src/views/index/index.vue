<template>
  <div class="index-page">
    <!-- first pane -->
    <div class="firstPane">
      <div class="header">
        <div class="logo"></div>
        <div class="navigation">
          <div class="index line">首页</div>
          <div class="index" @click="handleJumpToCase">案例 </div>
          <div class="index" @click="handleJumpToServer">服务 </div>
          <div class="index" @click="handleJumpToAbout">我们</div>
        </div>
      </div>
     
      <div class="content1">
        产业互联网时代的数字化专家
      </div>
      <div class="content2">
        A digital expert in the era of industrial Internet
      </div>
     
      <div class="mouse">
      </div>
    </div>
    <!-- second pane -->
    <div class="secondPane">
      <div class="order">
        <span>01</span>
        <span>02</span>
        <span>03</span>
      </div>
      <div class="s-content1">
        数字化咨询
      </div>
      <div class="s-content2">
        以行业的运行逻辑为根本，以提升用户体验和降本增效为目标导向
      </div>
      <div class="s-content3" @click="handleJumpToServer">
        了解详情
      </div>
      
      <div class="image">
      </div>
    </div>
    <!-- thirdPane -->
    <div class="thirdPane">
      <div class="order">
        <span>01</span>
        <span>02</span>
        <span>03</span>
      </div>
      <div class="thirdPane-content1">
        产品设计
      </div>
      <div class="thirdPane-content2">
        产品以数字化战略为导向，以最小切入点进行突破
      </div>
      <div class="thirdPane-content3" @click="handleJumpToServer">
        了解详情
      </div>
      <div class="thirdPane-image">
      </div>
    </div>
    <!-- fourthPane -->
    <div class="fourthPane">
      <div class="order">
        <span>01</span>
        <span>02</span>
        <span>03</span>
      </div>
      <div class="fourthPane-content1">
        平台开发
      </div>
      <div class="fourthPane-content2">
        做好全局规划，搭建拓展性良好的底层框架，输出高质量代码
      </div>
      <div class="fourthPane-content3" @click="handleJumpToServer">
        了解详情
      </div>
      <div></div>
      <div class="fourthPane-image">
      </div>
    </div>
    <!-- fifthPane -->
    <div class="fifthPane">
      <div class="fifthPane-content1">SOLUTION</div>
      <div class="fifthPane-content2">
        已为80+企业组织提供专业的数字化解决方案
        —
      </div>
      <div class="fifthPane-content3">
        <div class="subPane1">
          <div class="subPane1Image"></div>
          <div class="sub1Content">
            <div class="zerler"><span class="zerler-span">ZERLER</span></div>
            <div><span class="zerler-span2">ZEALER：科技生活第一站</span></div>
          </div>
        </div>
        <div class="subPane2">
          <div class="subPane2Image"></div>
          <div class="sub2Content">
            <div class="fudan"><span class="fudan-span">复旦大学</span></div>
            <div><div class="fudan-span2">复旦大学+：校园版的今日头条
              与媒体管理平台</div></div>
          </div>
        </div>
        <div class="subPane3">
          <div class="subPane3Image"></div>
          <div class="sub1Content">
            <div class="jinrong"><span class="jinrong-span">黄埔区金融局</span></div>
            <div><div class="jinrong-span2">
              金融超市：政府背书的地方性中小企业融资平台
            </div></div>
          </div>
        </div>
      </div>
      <div class="fifthPane-moreServer" @click.stop="handleJumpToServer">
        <div class="fifthPane-server">更多服务案例</div>
      </div>
      <div class="fifthPane-content4"></div>
    </div>
    <!-- sixthPane -->
    <div class="sixthPane">
      <div class="sixthPane-content1">PARTNER</div>
      <div class="sixthPane-content2">
        取合作伙伴所长，赋能客户
        —
      </div>
      <div class="sixthPane-image"></div>
      <div class="sixthPane-bottom" @click.stop="handleJumpToAbout"><span class="sixthPane-bottomText">关于我们</span></div>
    </div>
    <!-- seventhPane -->
    <div class="seventhPane">
      <div class="seventhPane-content1">CONTACT</div>
      <div class="seventhPane-content2">
        开始你的数字化服务之旅，请联系我们
        —
      </div>
      <div class="seventhPane-phoneIcon"></div>
      <div class="seventhPane-phoneNumber">138-2523-1160</div>
      <div class="seventhPane-address">
        办公地址：深圳市南山区高新南七道惠恒大楼二期509
        <!-- 工作时间：周一至周五 10:00-18:30 -->
      </div>
      <div class="seventhPane-QRcodeBackgroundColor">
        <div class="seventhPane-QRcode"></div>
      </div>
      <div class="seventhPane-content3">我们的微信随时待候您的垂询</div>
      <div class="seventhPane-copyRight" ><a style="color:rgba(213,213,213,1); text-decoration:none;" href="http://www.beian.miit.gov.cn" target="_blank">Copyright  2016-2020 Xiaochengxu. All rights reserved.    粤ICP备18003699号</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    // console.log('jquery')
  },
  methods: {
    jump() {
      window.location.href="https://www.beian.miit.gov.cn";
    },
    handleJumpToCase() {
      this.$router.push({
        path: '/case'
      })
    },
    handleJumpToServer() {
      this.$router.push({
        path: '/server'
      })
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    handleJumpToAbout() {
      this.$router.push({
        path: '/about'
      })
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// @import url("./index.scss");
 @import "./firstPane.scss";
@import "./secondPane.scss";
@import "./thirdPane.scss";
@import "./fourthPane.scss";
@import "./fifthPane.scss";
@import "./sixthPane.scss";
@import "./seventhPane.scss";

</style>
