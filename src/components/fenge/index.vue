<template>
<!-- 细胞分割 -->
  <div class="fenge-page"
    v-loading="loading"
    element-loading-text="拼命计算当中！请稍等"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    
    <h2>膀胱癌分割</h2>

    <el-row :gutter="24">
      <el-col :span="12" :offset="6" class="upload-col">
        <div @click="uploadfile" class="upload-button">
            <i class="el-icon-plus"></i>
        </div>
      </el-col>
    </el-row>


    <el-row :gutter="24">
      <el-col :span="12" :offset="6" class="start-col">
        <div class="start" @click="handleStartToCheck">
          开始检测
        </div>  
      </el-col>
    </el-row>
    
    <input  style="display: none;" type="file" id="readImage" accept="image/png, image/jpeg" class="upload">

    <el-dialog
      title="膀胱癌分割结果"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <img class="img" style="width 300px; height:auto;margin:0 auto;"  v-bind:src="'data:image/jpeg;base64,' + imgUrl" alt="">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data: () => {
    return {
      radio1: false,
      radio2: false,
      loading: false,
      res: {},
      dialogVisible: false,
      imgUrl: ''
    }
  },
  created() {
  },
  mounted() {
    let that = this
    document.querySelector('.upload').onchange = function () {
    that.$message({
      message: '恭喜你，上传成功，请点击开始检测按钮！',
      type: 'success'
    });
  }
  },
  methods: {
   uploadfile () {
       document.querySelector('.upload').click()
   },
   handleStartToCheck () {
       this.loading = true
       const _this = this
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
          var imgArr = imgData.split(',')
          var img = imgArr[1]
          var http = new XMLHttpRequest()
          var url = 'http://49.235.30.26:8000/'
          http.open('post', url, true)
          http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
              _this.res = JSON.parse(http.responseText)
              _this.imgUrl =  _this.res.new_image
              _this.dialogVisible = true
              _this.loading = false
              _this.$forceUpdate()
            }
          }
          http.setRequestHeader("Content-type","application/x-www-form-urlencoded");  // 设置请求头
          var para = {
            t: 'segmentation',
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
 @import "./index.scss";
</style>
