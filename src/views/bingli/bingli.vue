<template>
  <div class="fenxi-page">
    <div class="head">
        <div class="active div" >临床检测</div>
        <div class="active div"> 病理检测</div>
    </div>
    <div class="content">
        <div class="left">
          <div class="button" @click="uploadfile"></div>
         
        </div>
        <div class="right">
          <div class="head">
            检测类型：
          <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
          <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
        </div>

         <div class="start" @click="start">
              开始检测
          </div>
        </div>
        
    </div>
    
    <input  type="file" id="readImage" accept="image/png, image/jpeg" class="upload">
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
 @import "./bingli.scss";
</style>
