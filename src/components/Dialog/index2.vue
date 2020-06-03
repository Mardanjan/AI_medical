<template>
  <div class="jl_dialog" :class="{hide:!value}">
    <div class="UImask" @click="maskHandle"></div>
    <div class="UIdialog">
        <slot>弹窗内容</slot>
    </div>
  </div>
</template>
<script>
export default {
    name: 'jlDialog',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      confirm: {
        type: Boolean,
        default: false
      },
      cancel: {
        type: Boolean,
        default: false
      },
      title: {
        default: null
      },
      confirmVal: {
        type: String,
        default: '是'
      },
      cancelVal: {
        type: String,
        default: '否'
      },
      isDisabled: {
        type: Boolean,
        default: false
      },
      maskHide:{
        type: Boolean,
        default:true
      }
    },
    methods: {
      maskHandle(){
          if(this.maskHide){
            //   console.log(2222)
              this.$emit('input',false)
          }
      },
      onConfirm(){
          if(!this.isDisabled){
              this.$emit('onConfirm')
              this.$emit('input', false)
          }
      },
      onCancel(){
        this.$emit('onCancel')
        this.$emit('input', false)
      }
    }
}
</script>

<style lang="scss" scoped>
    .UImask{
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .6);
    }
   .UIdialog{
        text-align: left;
        position: fixed;
        z-index: 5000;
        width: 720px;
        height: 960px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        overflow: auto;
        // background-color: red;
    }
    .UIdialog_bd {
        min-height: 40px;
        font-size: 15px;
        line-height: 1.3;
        word-wrap: break-word;
        word-break: break-all;
    }

</style>