<template>
  <div class="bingli-page">
    <div class="head">
      <div class="nav-bar"><p>数据中心</p><p>智能诊断</p></div>
    </div>
    <div class="title"><p>-电子病历-</p></div>
    <div class="content">
      <input type="text"/><br/>
      <div class="table_area">
        <div class="table">
          <div class="line"><p>张三</p><p>病历号：xxxxx</p></div>
          <div class="line"><p>张三</p><p>病历号：xxxxx</p></div>
        </div>
        <div class="search"><span class="el-icon-search"></span></div>
       </div> 
    </div>
  </div>
</template>
<script>

export default {

  created() {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 @import "./bingli.scss";
</style>
