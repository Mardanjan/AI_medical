<template>
  <div class="fenxi-page">
    <div class="head">
        <div class="active div" >临床检测</div>
        <div class="active div"> 病理检测</div>
    </div>
    <el-button
    type="primary"
    @click="openFullScreen1"
    v-loading.fullscreen.lock="fullscreenLoading">
    指令方式
  </el-button>
    <div class="content"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
        <div class="left">
          <div class="button" @click="uploadfile"></div>
        </div>
        <div class="right">
          <!-- <div class="head">
            检测类型：
          <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
          <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
        </div> -->
         <div class="start" @click="handleStartToCheck">
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
      radio2: false,
      loading: true
    }
  },
  created() {
  },
  methods: {
   uploadfile () {
       document.querySelector('.upload').click()
   },
   handleStartToCheck () {
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
          var img = imgData.split(',')[1]
          var http = new XMLHttpRequest()
          var url = 'http://49.235.30.26:8000/'
          http.open('post', url, true)
          http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
              console.log('res:', http.responseText)
            }
          }
          http.setRequestHeader("Content-type","application/x-www-form-urlencoded");  // 设置请求头
          var para = {
            t: 'cell_counting',
            q: img
          }
          console.log(img)
          img = img.split(' ')
          img = img.join('+')
          http.send('t=' + para.t + '&q='+ para.q)
       }
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 @import "./fenxi.scss";
</style>
