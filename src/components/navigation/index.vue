<template>
   <div>
      <div class="container">
        <div class="logo"></div>
        <div class="navigation">
            <div class="index" @click="handleJumpToIndex"><a>首页</a></div>
            <div :class="arr[0]" @click="handleJumpToCase"><a>案例</a></div>
            <div :class="arr[1]" @click="handleJumpToServer">服务 </div>
            <div :class="arr[2]" @click="handleJumpToAbout">我们</div>
            <div :class="arr[3]" @click="handleJumpToHezuoyiyuan">合作医院</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        arr: {
            type: Array,
            default: () => ['index', 'index', 'index', 'index']
        }
    },
    data() {
        return{
            // arr: ['index', 'index', 'index']
        }
    },
    methods: {
    handleJumpToIndex() {
      if (this.$route.path !== '/') {
          this.$router.push({
            path: '/'
        })
      }
    },
    handleJumpToCase() {
      if (this.$route.path !== '/case') {
          this.$router.push({
            path: '/case'
          })
      }
    },
    handleJumpToServer() {
       if (this.$route.path !== '/server')  {
           this.$router.push({
                path: '/server'
            })
       }
    },
    handleJumpToAbout() {
        if (this.$route.path !== '/about') {
            this.$router.push({
                path: '/about'
            })
        }
    },
    handleJumpToHezuoyiyuan() {
        if (this.$route.path !== '/hezuoyiyuan')  {
           this.$router.push({
                path: '/hezuoyiyuan'
            })
       }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./index.scss";
</style>
