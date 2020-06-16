<template>
  <div class="detail-page">
    <div class="head">
      <div class="nav-bar"><p>数据中心</p><p>智能诊断</p></div>
    </div>
    <div class="title"><p>-电子病历-</p></div>
    <div class="content">
      <div class="data_area">
        <div class="patient_info"><p>病历号：xxx</p><p>姓名：张三</p><p>性别：男</p><p>出生年月日：2000-8-7</p><p class="last">诊断日期：2020-01-12</p></div>
        <div class="detail_info">主诉：xxx</div>
        <div class="detail_info">主诉：xxx</div>
        <div class="detail_info">主诉：xxx</div>
       </div> 
    </div>
    <div class="return"><p>返回</p></div>  
  </div>
</template>

<script>

export default {
  data: () => {
    return {
      radio1: false,
      radio2: false
    }
  },
  created() {
    // console.log('jquery')
  },
  methods: {
   submit() {
     this.$router.push({path: '/login'})
   },
   uploadfile () {
       document.querySelector('.upload').click()
   },
   start () {
       let img = document.querySelector('.upload')
       var imgFile = new FileReader()
       if (img.files.length <= 0) {
           alert('请上传图片')
           return
       }
       console.log(img.files)
       imgFile.readAsDataURL(img.files[0])
       imgFile.onload = function () {
           var imgData = this.result
           console.log(imgData)
       }
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 @import "./detail.scss";
</style>
