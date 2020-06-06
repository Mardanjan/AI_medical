<template>
  <div class="server_index">
    <Nave :arr="arr"></Nave>
    
  </div>
</template>

<script>
import Nave from '../../components/navigation/index.vue'
export default {
  components: {
    Nave
  },
  data() {
    return{
      dialogVisible2: false,
      arr: ['index', 'index line', 'index']
    }
  },
  methods: {
    handleConnectUs() {
      this.dialogVisible2 = true
    },
    handleCloseDialog2() {
      this.dialogVisible2 = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "scss">
 @import "./index.scss";
</style>
