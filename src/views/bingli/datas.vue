<template>
  <div class="datas-page">
    <div class="head">
      <div class="nav-bar"><p>电子病历</p><p>智能诊断</p></div>
    </div>
    <div class="title"><p>-数据中心-</p></div>
    <div class="content">
      <div class="data_area">
        <div class="data-bar"><i class="el-icon-monitor"></i>dd</div>
        <div class="data-bar"><i class="el-icon-first-aid-kit"></i></div>
        <div class="data-bar"><i class="el-icon-video-camera"></i></div>
       </div> 
      <div class="data_area">
      <p>fdg</p>
      <p>fdg</p>
      <p>fdg</p>
      </div> 
      <div class="data_area">
        <div class="data-bar"><i class="el-icon-monitor"></i></div>
        <div class="data-bar"><i class="el-icon-document-checked"></i></div>
        <div class="data-bar"><i class="el-icon-document"></i></div>
      </div> 
      <div class="data_area">
      <p>fdg</p>
      <p>fdg</p>
      <p>fdg</p>
      </div> 
    </div>

  </div>
</template>

<script>

export default {
  data: () => {
    return {
<<<<<<< HEAD
      data:[
        {title:'sss'},
        {title:'sss'},
        {title:'sss'},
        {title:'sss'},
        {title:'sss'},
        {title:'sss'},
        {title:'sss'},
      ]
=======
      radio1: false,
      radio2: false
>>>>>>> 68b0a8fc32b24631a8a7d83960b85f74f1715ef9
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
 @import "./datas.scss";
</style>
