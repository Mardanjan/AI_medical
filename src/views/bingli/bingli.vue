<template>
  <div class="fenxi-page">
    <div class="head">
      <div class="nav-bar"><p>数据中心</p><p>数据中心</p></div>
    </div>
    <div class="title"><p>-电子病历-</p></div>
    <div class="content">
      <input type="text"/><br/>
      <div class="table_area">
        <div class="table">
          <div class="line"><p>张三</p><p>病历号：xxxxx</p></div>
          <div class="line"><p>张三</p><p>病历号：xxxxx</p></div>
        </div>
        <div class="search"></div>
       </div> 
    </div>
        
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
