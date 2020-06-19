<template>
  <div class="login-page">
    <div class="head"></div>
    <div class="content">
        <div class="left">
            <div class="icon dianzhen">
            </div>
            <div class="c1">
                AI轻医疗
            </div>
            <div class="c2">
                精准高效的膀胱癌智能诊断系统
            </div>
            <div class="c3">
                关注膀胱癌的预防、诊断、治疗和复诊的全过程
            </div>
        </div>
        <div class="right">
            <div class="login">
                <p class="denglu">登录</p>
                <input type="text" class="zhanghao" placeholder="请输入帐号" name="" id="">
                <input type="text" class="mima" name="" placeholder="请输入密码" id="">
                <button class="button" @click="handleLogin">登录</button>
                <p class="zhuce" @click="jumpToRegisterPage">立即注册</p>
            </div>
        </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
export default {
  created() {
  },
  methods: {
    jumpToRegisterPage() {
      this.$router.push({path: '/register'})
    },
    handleLogin () {
      alert('登录成功！')
      this.$router.push({path: '/fenxi'})
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 @import "./login.scss";
</style>
