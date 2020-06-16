<template>
  <div class="zhuce-page">
    <h2 class="head">———————————欢迎加入————————————</h2>
    <div class="content">
        <div class="left">
            <div class="content">
                <p>请填写以下信息</p>
                <input type="text" class="zhanghao" placeholder="请输入帐号">
                <input type="text" class="mima" placeholder="请输入密码">
                <input type="text" class="chongfumima" placeholder="重复输入密码">
                <input type="text" name="" id="" placeholder="请输入真实姓名">
                <input type="text" class="" placeholder="请输入职称">
                <input type="text" name="" id="" placeholder="请输入所属医院">
                <input type="text" placeholder="请输入所属科室">
                <div class="bbbbb">
                  <button class="button" @click="submit">提交</button>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="content">
              <div class="text">
                AI轻医疗
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  created() {
    // console.log('jquery')
  },
  methods: {
   submit() {
     alert('注册成功')
     this.$router.push({path: '/login'})
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 @import "./zhuce.scss";
</style>
