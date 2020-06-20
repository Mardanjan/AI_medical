<template>
<!-- 细胞计数 -->
  <div class="xibaojishu-page"
    v-loading="loading"
    element-loading-text="拼命计算当中！请稍等"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    
    <div class="button" @click="uploadfile">
        点击上传图片
    </div>
    <div class="start" @click="handleStartToCheck">
    开始检测
    </div>  
    <input  type="file" id="readImage" accept="image/png, image/jpeg" class="upload">

    <el-dialog
      title="细胞计数结果"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>细胞数量为：{{res.num_cell}}</span>
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
      dialogVisible: false
    }
  },
  created() {
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
          var img = imgData.split(',')[1]
          var http = new XMLHttpRequest()
          var url = 'http://49.235.30.26:8000/'
          http.open('post', url, true)
          http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
              console.log('res:', http.responseText)
              _this.res = JSON.parse(http.responseText)
              console.log(JSON.parse(http.responseText))
              _this.dialogVisible = true
              _this.loading = false
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
 @import "./index.scss";
</style>
